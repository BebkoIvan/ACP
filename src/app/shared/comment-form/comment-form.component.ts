import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserInfoService } from 'src/app/services/user-info.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.pug',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  constructor(private _user: UserAuthService) {}

  user: User;
  comment: Comment1;
  @Input() value? : string;
  CommentForm: FormGroup = new FormGroup({

    commentText: new FormControl('', [
    Validators.minLength(10),
      Validators.maxLength(999),
      Validators.required
    ]),
  });

  @Output() commentCreated: EventEmitter<Comment1> =   new EventEmitter();

  ngOnInit() {

    if (this.value) {
      this.CommentForm.get('commentText').setValue(this.value);
    }
 
   }

  createComment(event: Event): void {
    event.preventDefault();

    this.comment = {
      _author: this._user.user.id,
      createdAt: new Date(),
      text: this.CommentForm.get('commentText').value,
      _id:'',
      id:'',
      updatedAt:new Date(),
      _post:''

    }
    if (this.comment.text) {
      this.commentCreated.emit(this.comment);
      this.CommentForm.reset('commentText');
    }

  
  }

}
