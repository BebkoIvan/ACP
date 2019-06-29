import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromQuizzes from './quizzes.reducer';
 
export const selectQuizzesState = createFeatureSelector<fromQuizzes.QuizzesState>('quizzes');

export const selectQuizzesFeedState = createSelector(selectQuizzesState, fromQuizzes.selectQuizzesFeedState);

export const selectQuizzes = createSelector(selectQuizzesFeedState, fromQuizzes.selectAllQuizzes);

export const selectOneQuiz = createSelector(
    selectQuizzesState,
    (state: fromQuizzes.QuizzesState) => state.quiz.quiz
);
