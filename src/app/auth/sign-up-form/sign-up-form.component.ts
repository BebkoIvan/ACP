import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { concatMap, switchMap, combineLatest, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  constructor(private formBuilder: FormBuilder, private _userAuth: AuthService, private _router: Router) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.pattern(/^[a-zA-Z\s]*$/)],
      lastName: ['', Validators.pattern(/^[a-zA-Z\s]*$/)]
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
      this._userAuth.signUp(user).pipe(
        mergeMap((res1) => this._userAuth.signIn(this.signUpForm.value))
      ).subscribe(data => {this._userAuth.setToken(data.token); this._userAuth.isAuth = true;
                           this._router.navigate(['/workshops']); this._userAuth.user = data;
       });

        }
}
