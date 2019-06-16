import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.pug',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  passwordChanging = false;
  passwordForm: FormGroup;
  constructor(public userService: UserAuthService, private formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit() {

    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
  });

    if (this.userService.user)
    {
      this.userService.setUser();
    }

  }

  logOut(){
    localStorage.clear();
    this.userService.isAuth = false;
    this.userService.user = null;
    this._router.navigate(['/login']);
  }

  changePassword(e:Event){
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
     }

    this.userService.updateUser(this.userService.user._id, body).subscribe(data => alert("Password has changed"));
    this.hideForm();
    this.passwordForm.reset();
  

}
}
