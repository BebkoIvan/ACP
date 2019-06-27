import { Action } from '@ngrx/store';
import '../models/workshop-interface';

export enum WorkshopsActionTypes {
  ArticlesRequested = '[Workshops Feed] Articles Requested',
  ArticlesLoaded= '[Workshops Feed] Articles Loaded',
  ArticlesLoadingFailed = '[Workshops Feed] Articles Loading Failed',
  
  TagsRequested = '[Workshops Feed]  Tags Requested',
  TagsLoaded= '[Workshops Feed]  Tags Loaded',
  TagsLoadingFailed = '[Workshops Feed]  Tags Loading Failed',

  WorkshopRequested = '[Workshops page]  Workshop Requested',
  WorkshopLoaded= '[Workshops page]  Workshop Loaded',
  WorkshopLoadingFailed = '[Workshops page]  Workshop Loading Failed',
  

  
}


export class ArticlesRequested implements Action {
  readonly type = WorkshopsActionTypes.ArticlesRequested;
  constructor(public payload: { queryParams: any }) {}
}

export class ArticlesLoaded implements Action {
  readonly type = WorkshopsActionTypes.ArticlesLoaded;
  constructor(public payload: {workshops: Workshop[]}) {}
}

export class ArticlesLoadingFailed implements Action {
  readonly type = WorkshopsActionTypes.ArticlesLoadingFailed;
  constructor(public payload: { error: any }) {}
}


export class TagsRequested implements Action {
  readonly type = WorkshopsActionTypes.TagsRequested;
  constructor(public payload: {}) {}
}

export class TagsLoaded implements Action {
  readonly type = WorkshopsActionTypes.TagsLoaded;
  constructor(public payload: {tags: Array<any>}) {}
}

export class TagsLoadingFailed implements Action {
  readonly type = WorkshopsActionTypes.TagsLoadingFailed;
  constructor(public payload: { error: any }) {}
}

export class WorkshopRequested implements Action {
  readonly type = WorkshopsActionTypes.WorkshopRequested;
  constructor(public payload: {id: string}) {}
}

export class WorkshopLoaded implements Action {
  readonly type = WorkshopsActionTypes.WorkshopLoaded;
  constructor(public payload: {workshop: Workshop}) {}
}

export class WorkshopLoadingFailed implements Action {
  readonly type = WorkshopsActionTypes.WorkshopLoadingFailed;
  constructor(public payload: { error: any }) {}
}



export type WorkshopsActions =
ArticlesLoaded |
ArticlesRequested |
ArticlesLoadingFailed |
TagsLoaded |
TagsRequested |
TagsLoadingFailed |
WorkshopLoaded |
WorkshopLoadingFailed |
WorkshopRequested
;
