import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { SignedOut } from 'src/app/auth/store/auth.actions';
import { selectAuthData } from 'src/app/auth/store/auth.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.pug',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  passwordChanging = false;
  passwordForm: FormGroup;
  profile;
  constructor(public userService: AuthService,
              private store: Store<AppState>, private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {

    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
  });

    this.store.select(selectAuthData).subscribe(data => this.profile = data);

  }

  logOut(e: Event) {
    this.store.dispatch(new SignedOut());
    this.userService.signOut();
  }

  changePassword(e: Event) {
    this.passwordChanging = true;
  }

  hideForm() {
    this.passwordChanging = false;
  }
  get f() { return this.passwordForm.controls; }

  onSubmit(e: Event) {

    if (this.passwordForm.invalid) {
      return;
     }

    const body = {
      newPassword : this.f.password.value
     };



    this.userService.updateUser(this.profile.id, body).subscribe(data => alert('Password has changed'));
    this.hideForm();
    this.passwordForm.reset();
}


}
