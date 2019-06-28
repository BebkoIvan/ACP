import { Action } from '@ngrx/store';
import '../models/workshop-interface';
import { Update } from '@ngrx/entity';

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

  WorkshopCommentsRequested = '[Workshops page]  Workshop Comments Requested',
  WorkshopCommentsLoaded= '[Workshops page]  Workshop Comments Loaded',
  WorkshopCommentsLoadingFailed = '[Workshops page]  Workshop Comments Loading Failed',

  WorkshopAddComment = '[Workshops page]  Workshop Add Comment',
  WorkshopCommentAdded = '[Workshops page]  Workshop Comment Added',

  WorkshopDeleteComment = '[Workshops page]  Workshop Delete Comment',
  WorkshopCommentDeleted = '[Workshops page]  Workshop Comment Deleted',

  WorkshopUpdateComment = '[Workshops page]  Workshop Update Comment',
  WorkshopCommentUpdated = '[Workshops page]  Workshop Comment Updated'


  
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
  constructor(public payload: {tags: Tag[]}) {}
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




export class WorkshopCommentsRequested implements Action {
  readonly type = WorkshopsActionTypes.WorkshopCommentsRequested;
  constructor(public payload: {id: string}) {}
}

export class WorkshopCommentsLoaded implements Action {
  readonly type = WorkshopsActionTypes.WorkshopCommentsLoaded;
  constructor(public payload: {comments: Comment1[]}) {}
}

export class WorkshopCommentsLoadingFailed implements Action {
  readonly type = WorkshopsActionTypes.WorkshopCommentsLoadingFailed;
  constructor(public payload: { error: any }) {}
}




export class WorkshopAddComment implements Action {
  readonly type = WorkshopsActionTypes.WorkshopAddComment;
  constructor(public payload: { postId: string, comment: Comment1  }) {}
}

export class WorkshopCommentAdded implements Action {
  readonly type = WorkshopsActionTypes.WorkshopCommentAdded;
  constructor(public payload: { comment: Comment1 }) {}
}


export class WorkshopDeleteComment implements Action {
  readonly type = WorkshopsActionTypes.WorkshopDeleteComment;
  constructor(public payload: { postId: string, commentId: string }) {}
}

export class WorkshopCommentDeleted implements Action {
  readonly type = WorkshopsActionTypes.WorkshopCommentDeleted;
  constructor(public payload: { commentId: string }) {}
}


export class WorkshopUpdateComment implements Action {
  readonly type = WorkshopsActionTypes.WorkshopUpdateComment;
  constructor(public payload: { postId: string, commentId: string, text: string }) {}
}

export class WorkshopCommentUpdated implements Action {
  readonly type = WorkshopsActionTypes.WorkshopCommentUpdated;
  constructor(public payload: Update<Comment1> ) {}
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
WorkshopRequested |
WorkshopCommentsLoadingFailed |
WorkshopCommentsLoaded |
WorkshopCommentsRequested |
WorkshopAddComment |
WorkshopDeleteComment |
WorkshopCommentAdded |
WorkshopCommentDeleted |
WorkshopCommentUpdated |
WorkshopUpdateComment 

;
