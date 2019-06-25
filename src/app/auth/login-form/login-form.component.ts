import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

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
              private _userAuth: AuthService,
              private store:Store <AppState>,
              private _router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }


  signUp(e: Event) {
    this._router.navigate(['./sign-up']);
  }

    onSubmit() {
      
      if (this.loginForm.invalid) {
          return;
         }
      this.submitted = true;
      console.log(this.loginForm.value);
      this._userAuth.signIn(this.f.username.value, this.f.password.value).subscribe(data =>
        { console.log(this.loginForm.value);
          this._userAuth.setToken(data.token); this._userAuth.isAuth = true;
          this._router.navigate(['/workshops']); this._userAuth.user = data; this._userAuth.setUser();
         } );

    }


}
