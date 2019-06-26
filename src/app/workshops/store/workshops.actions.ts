import { Action } from '@ngrx/store';
import '../models/workshop-interface';

export enum WorkshopsActionTypes {
  WorkshopsRequested = '[Workshops Feed] Workshops Requested',
  WorkshopsLoaded= '[Workshops Feed] Workshops Loaded',
  WorkshopsLoadingFailed = '[Workshops Feed] Workshops Loading Failed'
  
  
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



export type WorkshopsActions =
WorkshopsLoaded |
WorkshopsRequested |
WorkshopsLoadingFailed
;
