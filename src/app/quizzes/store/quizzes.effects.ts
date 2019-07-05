import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuizzesService } from '../services/quizzes.service';
import { QuizzesRequested, QuizzesActionTypes, QuizzesLoaded, QuizzesLoadingFailed, QuizRequested, QuizLoaded, QuizLoadingFailed, AddQuiz, QuizAdded, DeleteQuiz, QuizDeleted } from './quizzes.actions';



@Injectable()
export class QuizzesEffects {

  constructor(private actions$: Actions, private quizzesService: QuizzesService) {}

  @Effect()
  quizzesRequested$ = this.actions$
  .pipe(
    ofType<QuizzesRequested>(QuizzesActionTypes.QuizzesRequested),
    map( (action: QuizzesRequested) => action.payload),
    exhaustMap((queryParams: any) => {
      return this.quizzesService.getQuizzes(queryParams.queryParams).pipe(
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

  @Effect()
  quizRequested$ = this.actions$
    .pipe(
      ofType<QuizRequested>(QuizzesActionTypes.QuizRequested),
      map( (action: QuizRequested) => action.payload),
      exhaustMap( ({id}) => {
        return this.quizzesService.getOneQuiz(id).pipe(
          map((quiz: any) => {
            quiz = quiz[0];
            return new QuizLoaded({quiz});
          }),
          catchError((error) => {
            return of(new QuizLoadingFailed({error}));
          })

        );
      })
    );


    @Effect()
    addQuiz$ = this.actions$
    .pipe(
      ofType<AddQuiz>(QuizzesActionTypes.AddQuiz),
      map( (action: AddQuiz) => action.payload),
      exhaustMap( (quiz: any) => {
       return this.quizzesService.createQuiz(quiz.quiz).pipe(
        map((data) => {
          data = data.quiz[0];
          return new QuizAdded({quiz: data});
        }),
        catchError((error) => {
          return of(new QuizLoadingFailed({error}));
        })
        );
      })
    );

    @Effect()
    deleteQuiz$ = this.actions$
    .pipe(
      ofType<DeleteQuiz>(QuizzesActionTypes.DeleteQuiz),
      map( (action: DeleteQuiz) => action.payload),
      exhaustMap( (payload) => {
       return this.quizzesService.deleteQuiz(payload.quizId).pipe(
        map((data) => {
          return new QuizDeleted({quizId: payload.quizId});
        }),
        catchError((error) => {
          return of(new QuizLoadingFailed({error}));
        })
        );
      })
    );


}