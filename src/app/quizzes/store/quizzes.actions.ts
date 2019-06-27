import { Action } from '@ngrx/store';

export enum QuizzesActionTypes {
  QuizzesRequested = '[Quizzes Feed] Quizzes Requested',
  QuizzesLoaded= '[Quizzes Feed] Quizzes Loaded',
  QuizzesLoadingFailed = '[Quizzes Feed] Quizzes Loading Failed',
  
  QuizzAdded = '[Quizzes Feed] Quizz Added',

  
  
}


export class QuizzesRequested implements Action {
  readonly type = QuizzesActionTypes.QuizzesRequested;
  constructor(public payload: { queryParams: any }) {}
}

export class QuizzesLoaded implements Action {
  readonly type = QuizzesActionTypes.QuizzesLoaded;
  constructor(public payload: {quizzes: Array<any>}) {}
}

export class QuizzAdded implements Action {
  readonly type = QuizzesActionTypes.QuizzAdded;
  constructor(public payload: {quiz: any}) {}
}

export class QuizzesLoadingFailed implements Action {
  readonly type = QuizzesActionTypes.QuizzesLoadingFailed;
  constructor(public payload: { error: any }) {}
}



export type QuizzesActions =
QuizzesLoaded |
QuizzesLoadingFailed |
QuizzesRequested
;