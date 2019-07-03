import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../services/quizzes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectQuizzes } from '../store/quizzes.selectors';
import { QuizzesRequested, QuizzesLoaded } from '../store/quizzes.actions';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quizzes-feed',
  templateUrl: './quizzes-feed.component.pug',
  styleUrls: ['./quizzes-feed.component.scss']
})
export class QuizzesFeedComponent implements OnInit {
  acaActive = true;
  quizzes$;
  paramsSubscription: Subscription;
  constructor(public quizS: QuizzesService, private router: Router, private route: ActivatedRoute,
              private authService: AuthService, private store: Store<AppState>) {
    this.paramsSubscription = route.queryParams.subscribe(p => this.store.dispatch(new QuizzesRequested({queryParams: p })));
    this.quizzes$ = this.store.pipe(
      select(selectQuizzes)
      );
  }

  ngOnInit() {
  }

  acaHandler(): void {
    this.acaActive = !this.acaActive;
}

ngOnDestroy(): void {
  this.store.dispatch(new QuizzesLoaded({quizzes: []}));
  this.paramsSubscription.unsubscribe();
  }


}
