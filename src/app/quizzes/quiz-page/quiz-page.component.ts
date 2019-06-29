import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../services/quizzes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { selectOneQuiz } from '../store/quizzes.selectors';
import { QuizRequested } from '../store/quizzes.actions';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.pug',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {
  acaActive = true;
  quiz$: Observable<any>;
  quiz;
  id: string;
  constructor(private _quizS: QuizzesService, private store: Store<AppState>, private route: ActivatedRoute) { }
  

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.quiz$ = this.store.pipe(select(selectOneQuiz));
    this.store.dispatch(new QuizRequested({id: this.id}));

  }

  formSubmitted(value) {
    console.log(value);
  }

}
