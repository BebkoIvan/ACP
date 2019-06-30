import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
import { QuizzesService } from '../services/quizzes.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { DeleteQuiz } from '../store/quizzes.actions';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.pug',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
  
  @Input() quiz;
  author$: Observable<any>;

  constructor(private authService: AuthService,private store: Store<AppState>, private quizService: QuizzesService) { }

  ngOnInit() {
    this.author$ = this.authService.getUserById(this.quiz.author).pipe(
      map((user) => user.username)
    );
  }

  deleteQuiz(e: Event) {
    this.store.dispatch(new DeleteQuiz({quizId: this.quiz.id}));
  }

}
