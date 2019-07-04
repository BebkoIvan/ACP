import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../services/quizzes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { selectOneQuiz } from '../store/quizzes.selectors';
import { QuizRequested, QuizLoaded } from '../store/quizzes.actions';
import { take } from 'rxjs/operators';
import { isBoolean } from 'util';

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
  constructor(private _quizS: QuizzesService, private store: Store<AppState>,
              private quizService: QuizzesService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
   }


  ngOnInit() {
    this.store.dispatch(new QuizRequested({id: this.id}));
    this.quiz$ = this.store.pipe(select(selectOneQuiz));


  }

  formSubmitted(value) {
    const answers = [];
    for (const key in value) {
      if (value.hasOwnProperty(key) && key !== 'submit') {
              answers.push(value[key]);
      }
  }


    this.quizService.validateQuiz(this.id, {formData: answers}).subscribe(data => {
      let rightAnswers = data.results.filter(x => x === 'true');
      alert(`${data.message} \n${rightAnswers.length} of ${data.results.length} answers is right`)
    });
    
  }

  ngOnDestroy(): void {
    this.store.dispatch(new QuizLoaded({quiz: null}));
  }

}
