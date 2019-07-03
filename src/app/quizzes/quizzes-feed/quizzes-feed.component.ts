import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../services/quizzes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectQuizzes } from '../store/quizzes.selectors';
import { QuizzesRequested } from '../store/quizzes.actions';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quizzes-feed',
  templateUrl: './quizzes-feed.component.pug',
  styleUrls: ['./quizzes-feed.component.scss']
})
export class QuizzesFeedComponent implements OnInit {
  acaActive = true;
  quizzes$;
  constructor(public quizS: QuizzesService, private router: Router, private route: ActivatedRoute,
              private authService: AuthService, private store: Store<AppState>) {
    route.queryParams.subscribe(p => this.store.dispatch(new QuizzesRequested({queryParams: p })));
    this.quizzes$ = this.store.pipe(
      select(selectQuizzes)
      );
  }

  ngOnInit() {
  }

  acaHandler(): void {
    this.acaActive = !this.acaActive;
}

}
