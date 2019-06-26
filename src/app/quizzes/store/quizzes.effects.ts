import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuizzesService } from '../services/quizzes.service';
import { QuizzesRequested, QuizzesActionTypes, QuizzesLoaded, QuizzesLoadingFailed } from './quizzes.actions';



@Injectable()
export class QuizzesEffects {

  constructor(private actions$: Actions, private quizzesService: QuizzesService) {}

  @Effect()
  QuizzesRequested$ = this.actions$
  .pipe(
    ofType<QuizzesRequested>(QuizzesActionTypes.QuizzesRequested),
    map( (action: QuizzesRequested) => action.payload),
    exhaustMap((queryParams: any) => {
      return this.quizzesService.getQuizzes().pipe(
        map((quizzes) => {
            quizzes = quizzes.quizzes;
            return new QuizzesLoaded({quizzes});
        }),
        catchError((error) => {
          return of(new QuizzesLoadingFailed({error}));
        })

      );
    })
  );

}