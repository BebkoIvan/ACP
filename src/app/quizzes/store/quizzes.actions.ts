import { Action } from '@ngrx/store';

export enum QuizzesActionTypes {
  QuizzesRequested = '[Quizzes Feed] Quizzes Requested',
  QuizzesLoaded= '[Quizzes Feed] Quizzes Loaded',
  QuizzesLoadingFailed = '[Quizzes Feed] Quizzes Loading Failed',

  QuizRequested = '[Quizzes page]  Quiz Requested',
  QuizLoaded= '[Quizzes page]  Quiz Loaded',
  QuizLoadingFailed = '[Quizzes page]  Quiz Loading Failed',
  
  QuizAdded = '[Quizzes Feed] Quizz Added',
  AddQuiz = '[Quizzes Feed] Add Quiz',

  QuizDeleted = '[Quizzes Feed] Quizz Deleted',
  DeleteQuiz = '[Quizzes Feed] Delete Quiz'

  
  
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


export class QuizRequested implements Action {
  readonly type = QuizzesActionTypes.QuizRequested;
  constructor(public payload: {id: string}) {}
}

export class QuizLoaded implements Action {
  readonly type = QuizzesActionTypes.QuizLoaded;
  constructor(public payload: {quiz: any}) {}
}

export class QuizLoadingFailed implements Action {
  readonly type = QuizzesActionTypes.QuizLoadingFailed;
  constructor(public payload: { error: any }) {}
}



export class AddQuiz implements Action {
  readonly type = QuizzesActionTypes.AddQuiz;
  constructor(public payload: { quiz: any  }) {}
}

export class QuizAdded implements Action {
  readonly type = QuizzesActionTypes.QuizAdded;
  constructor(public payload: { quiz: any }) {}
}


export class DeleteQuiz implements Action {
  readonly type = QuizzesActionTypes.DeleteQuiz;
  constructor(public payload: { quizId: string }) {}
}

export class QuizDeleted implements Action {
  readonly type = QuizzesActionTypes.QuizDeleted;
  constructor(public payload: { quizId: string }) {}
}



export type QuizzesActions =
QuizzesLoaded |
QuizzesLoadingFailed |
QuizzesRequested |
QuizLoaded |
QuizLoadingFailed |
QuizRequested |
AddQuiz |
QuizAdded |
DeleteQuiz |
QuizDeleted
;