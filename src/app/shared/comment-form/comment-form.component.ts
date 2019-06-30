import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserInfoService } from 'src/app/services/user-info.service';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAuthData } from 'src/app/auth/store/auth.selectors';
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.pug',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  constructor(private authService: AuthService, private store: Store<AppState>) {}

  user;
  comment: Comment1;
  @Input() value?: string;
  commentForm: FormGroup = new FormGroup({

    commentText: new FormControl('', [
    Validators.minLength(10),
      Validators.maxLength(999),
      Validators.required
    ]),
  });

  @Output() commentCreated: EventEmitter<Comment1> =   new EventEmitter();

  ngOnInit() {
    this.store.select(selectAuthData).subscribe(data => this.user = data);
    if (this.value) {
      this.commentForm.get('commentText').setValue(this.value);
    }
 
   }

  createComment(event: Event): void {
    event.preventDefault();
    this.comment = {
      _author: this.user.id,
      createdAt: new Date(),
      text: this.commentForm.get('commentText').value,
      _id: '',
      id: '',
      updatedAt: new Date(),
      _post: ''

    }
    if (this.comment.text) {
      this.commentCreated.emit(this.comment);
      this.commentForm.reset('commentText');
    }

  }

}
