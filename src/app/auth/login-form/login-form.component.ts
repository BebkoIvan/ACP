import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/index';
import { SignInRequested } from '../store/auth.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.pug',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }


  signUp(e: Event) {
    this.router.navigate(['./sign-up']);
  }

    onSubmit() {
      if (this.loginForm.invalid) {
          return;
         }
      else {
        this.store.dispatch(new SignInRequested({
          credentials: this.loginForm.value,
          redirectTo: ''
        }));
      }

    }


}
