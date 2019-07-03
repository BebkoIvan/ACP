import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
import { QuizzesService } from '../services/quizzes.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { DeleteQuiz } from '../store/quizzes.actions';
import { ConfirmPopupService } from 'src/app/core/services/confirm-popup.service';
import { selectAuthData } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.pug',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {

  @Input() quiz;
  author$: Observable<any>;
  authSubscription: Subscription;
  isEditable = false;
  constructor(private authService: AuthService, private confirmPopupService: ConfirmPopupService,
              private store: Store<AppState>, private quizService: QuizzesService) { }

  ngOnInit() {
    this.author$ = this.authService.getUserById(this.quiz.author).pipe(
      map((user) => user.username)
    );

    this.authSubscription = this.store.pipe(select(selectAuthData)).subscribe(user => {
      if (!user) {
        return;
      }
      if (this.quiz.author === user._id) {
          this.isEditable = true;
      }
      else{
          this.isEditable = false;
      }
  });

  }

  deleteQuiz(e: Event) {
    this.confirmPopupService.confirm({
      title: 'Delete quiz',
      message: 'Do you want to delete this quiz?'
    }).subscribe((confirmed: boolean) => {
      this.store.dispatch(new DeleteQuiz({quizId: this.quiz.id}));
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
