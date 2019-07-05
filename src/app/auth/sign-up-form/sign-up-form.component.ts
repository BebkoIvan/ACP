import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { concatMap, switchMap, combineLatest, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { SignInRequested } from '../store/auth.actions';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.pug',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  signUpForm: FormGroup;
  loading = false;
  submitted = false;
  a: any;
  b: any;
  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>,
              private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      lastName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]]
  });
  }

  get f() { return this.signUpForm.controls; }

    onSubmit(e: Event) {
      e.preventDefault();
      if (this.signUpForm.invalid) {
          return;
         }
      this.submitted = true;
      const user = {
        username: `${this.f.username.value}`,
        password: `${this.f.password.value}`,
        firstName: this.f.firstName.value ? `${this.f.firstName.value}` : '',
        lastName: this.f.lastName.value ? `${this.f.lastName.value}` : ''
      };

      this.authService.signUp(user).subscribe(data => {
        console.log(data);
        this.store.dispatch(new SignInRequested({
          credentials: {username: `${this.f.username.value}`, password: `${this.f.password.value}`},
          redirectTo: ''
        }));
      });
}
}
