import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../services/quizzes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WorkshopsRequested } from 'src/app/workshops/store/workshops.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectQuizzes } from '../store/quizzes.selectors';
import { QuizzesRequested } from '../store/quizzes.actions';

@Component({
  selector: 'app-quizzes-feed',
  templateUrl: './quizzes-feed.component.pug',
  styleUrls: ['./quizzes-feed.component.scss']
})
export class QuizzesFeedComponent implements OnInit {
  acaActive = true;
  quizzes1: Observable<any>;
  quizzes$;
  quizzes = [];
  constructor(public quizS: QuizzesService, private router: Router, private route: ActivatedRoute, private store: Store<AppState>){
    route.queryParams.subscribe(p => this.store.dispatch(new QuizzesRequested({queryParams: p })));
  }

  ngOnInit() {
    this.quizzes$ = this.store.pipe(select(selectQuizzes));
    this.quizzes$.subscribe(data =>  this.quizzes = data);
  }

  acaHandler(): void {
    this.acaActive = !this.acaActive;
}

  deleteQuiz(quiz: any) {
    this.quizzes.splice(this.quizzes.indexOf(quiz), 1);
  }
}
