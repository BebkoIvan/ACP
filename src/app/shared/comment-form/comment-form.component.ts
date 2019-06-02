import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import { UserInfoService } from 'src/app/services/user-info.service';
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.pug',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  user: User;
  CommentForm: FormGroup = new FormGroup({

    comment: new FormControl('', [
    Validators.minLength(10),
      Validators.maxLength(999),
      Validators.required
    ]),
  });
  constructor(private _user: UserInfoService) {}

  ngOnInit() {
    this.user = this._user.profile;
  }

  createComment(event: Event,title: string): void {
    event.preventDefault();
    let comment=title;
  }

}
