import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user-auth.service';
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
  constructor(private formBuilder: FormBuilder, private _userAuth: UserAuthService, private _router: Router) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.signUpForm.controls; }

    onSubmit(e: Event) {
      e.preventDefault();
      if (this.signUpForm.invalid) {
          return;
         }
      this.submitted = true;
      this._userAuth.signUp(this.f.username.value, this.f.password.value).pipe(
        mergeMap((res1) => this._userAuth.signIn(this.f.username.value, this.f.password.value))
      ).subscribe(data => {this._userAuth.setToken(data.token); this._userAuth.isAuth = true;
                           this._router.navigate(['/workshops']); this._userAuth.user = data;
       });

        //   this._userAuth.signUp(this.f.username.value, this.f.password.value).subscribe(data =>
    //     {console.log(data);
    //     this._router.navigate(['/login'])});

    // }
        }
}
