import { Action } from '@ngrx/store';
import '../models/workshop-interface';

export enum WorkshopsActionTypes {
  WorkshopsRequested = '[Workshops Feed] Workshops Requested',
  WorkshopsLoaded= '[Workshops Feed] Workshops Loaded',
  WorkshopsLoadingFailed = '[Workshops Feed] Workshops Loading Failed',
  
  WorkshopsTagsRequested = '[Workshops Feed] Workshops Tags Requested',
  WorkshopsTagsLoaded= '[Workshops Feed] Workshops Tags Loaded',
  WorkshopsTagsLoadingFailed = '[Workshops Feed] Workshops Tags Loading Failed',
  
  
}


export class WorkshopsRequested implements Action {
  readonly type = WorkshopsActionTypes.WorkshopsRequested;
  constructor(public payload: { queryParams: any }) {}
}

export class WorkshopsLoaded implements Action {
  readonly type = WorkshopsActionTypes.WorkshopsLoaded;
  constructor(public payload: {workshops: Workshop[]}) {}
}

export class WorkshopsLoadingFailed implements Action {
  readonly type = WorkshopsActionTypes.WorkshopsLoadingFailed;
  constructor(public payload: { error: any }) {}
}

export class WorkshopsTagsRequested implements Action {
  readonly type = WorkshopsActionTypes.WorkshopsTagsRequested;
  constructor(public payload: {}) {}
}

export class WorkshopsTagsLoaded implements Action {
  readonly type = WorkshopsActionTypes.WorkshopsTagsLoaded;
  constructor(public payload: {tags: Array<any>}) {}
}

export class WorkshopsTagsLoadingFailed implements Action {
  readonly type = WorkshopsActionTypes.WorkshopsTagsLoadingFailed;
  constructor(public payload: { error: any }) {}
}



export type WorkshopsActions =
WorkshopsLoaded |
WorkshopsRequested |
WorkshopsLoadingFailed |
WorkshopsTagsLoaded |
WorkshopsTagsRequested |
WorkshopsTagsLoadingFailed
;
