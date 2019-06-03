import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import { UserInfoService } from 'src/app/services/user-info.service';
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.pug',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  user: User;
  comment: Comment1;
  CommentForm: FormGroup = new FormGroup({

    commentText: new FormControl('', [
    Validators.minLength(10),
      Validators.maxLength(999),
      Validators.required
    ]),
  });
  constructor(private _user: UserInfoService) {}

  ngOnInit() {
    this.user = this._user.profile;
  }

  @Output() commentCreated: EventEmitter<Comment1> =   new EventEmitter();

  createComment(event: Event): void {
    event.preventDefault();

    this.comment = {
      authorImg: this._user.profile.imgSrc,
      authorLastname: this._user.profile.lastname,
      authorName: this.user.name,
      date:(new Date()).toDateString(),
      commentText: this.CommentForm.get('commentText').value,
      likes: 0
    }

    this.commentCreated.emit(this.comment);
    this.CommentForm.reset('commentText');
  
  }

}
