import { Action } from '@ngrx/store';

export enum QuizzesActionTypes {
  QuizzesRequested = '[Quizzes Feed] Quizzes Requested',
  QuizzesLoaded= '[Quizzes Feed] Quizzes Loaded',
  QuizzesLoadingFailed = '[Quizzes Feed] Quizzes Loading Failed',
  
  WorkshopsTagsRequested = '[Workshops Feed] Workshops Tags Requested',
  WorkshopsTagsLoaded= '[Workshops Feed] Workshops Tags Loaded',
  WorkshopsTagsLoadingFailed = '[Workshops Feed] Workshops Tags Loading Failed',
  
  
}


export class QuizzesRequested implements Action {
  readonly type = QuizzesActionTypes.QuizzesRequested;
  constructor(public payload: { queryParams: any }) {}
}

export class QuizzesLoaded implements Action {
  readonly type = QuizzesActionTypes.QuizzesLoaded;
  constructor(public payload: {quizzes: Array<any>}) {}
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