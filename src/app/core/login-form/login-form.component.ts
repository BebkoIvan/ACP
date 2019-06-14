import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.pug',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private _userAuth: UserAuthService,private _router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }

    onSubmit() {
      if (this.loginForm.invalid) {
          return;
         }
      this.submitted = true;

      this._userAuth.signIn(this.f.username.value, this.f.password.value).subscribe(data =>
        { console.log(data); this._userAuth.setTokenId(data.token,data._id); this._userAuth.isAuth = true;
          this._router.navigate(['/workshops']); this._userAuth.setUser();
         } );

    }

    signUp(e:Event){
      e.preventDefault();
      this._router.navigate(['/sign-up'])
    }

}
