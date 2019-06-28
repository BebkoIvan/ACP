import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { WorkshopsService } from '../services/workshops.service';
import { map, exhaustMap, catchError, take } from 'rxjs/operators';
import { ArticlesRequested, WorkshopsActionTypes, ArticlesLoaded, ArticlesLoadingFailed, TagsRequested, TagsLoaded, TagsLoadingFailed, WorkshopRequested, WorkshopLoaded, WorkshopLoadingFailed, WorkshopCommentsRequested, WorkshopCommentsLoaded, WorkshopCommentsLoadingFailed, WorkshopAddComment, WorkshopCommentAdded, WorkshopDeleteComment, WorkshopCommentDeleted, WorkshopUpdateComment, WorkshopCommentUpdated } from './workshops.actions';
import { of } from 'rxjs';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { CommentsService } from 'src/app/shared/services/comments-service/comments.service';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { selectTags, selectAllComments } from './workshops.selectors';



@Injectable()
export class WorkshopsEffects {



  constructor(private actions$: Actions, private workshopsService: WorkshopsService,
              private store: Store<AppState>,
              private commentsService: CommentsService,
              private tagsService: TagsService) {}

  @Effect()
  ArticlesRequested$ = this.actions$
  .pipe(
    ofType<ArticlesRequested>(WorkshopsActionTypes.ArticlesRequested),
    map( (action: ArticlesRequested) => action.payload),
    exhaustMap((queryParams: any) => {
      return this.workshopsService.getWorkshops(queryParams).pipe(
        map((workshops) => {
          if (workshops.posts) {
            workshops = workshops.posts;
            return new ArticlesLoaded({workshops});
          } else {
            return new ArticlesLoaded({workshops: []});
          }
        }),
        catchError((error) => {
          return of(new ArticlesLoadingFailed({error}));
        })

      );
    })
  );

  @Effect()
  TagsRequested$ = this.actions$
  .pipe(
    ofType<TagsRequested>(WorkshopsActionTypes.TagsRequested),
    map( (action: TagsRequested) => action.payload),
    exhaustMap(() => {
      return this.tagsService.getTags('all').pipe(
        map((tags) => {
            return new TagsLoaded({tags});
        }),
        catchError((error) => {
          return of(new TagsLoadingFailed({error}));
        })

      );
    })
  );

  @Effect()
    WorkshopRequested$ = this.actions$
    .pipe(
      ofType<WorkshopRequested>(WorkshopsActionTypes.WorkshopRequested),
      map( (action: WorkshopRequested) => action.payload),
      exhaustMap( ({id}) => {
        return this.workshopsService.getPostById(id).pipe(
          map((workshop: Workshop) => {
            return new WorkshopLoaded({workshop});
          }),
          catchError((error) => {
            return of(new WorkshopLoadingFailed({error}));
          })

        );
      })
    );


    @Effect()
    WorkshopCommentsRequested$ = this.actions$
    .pipe(
      ofType<WorkshopCommentsRequested>(WorkshopsActionTypes.WorkshopCommentsRequested),
      map( (action: WorkshopCommentsRequested) => action.payload),
      exhaustMap( ({id}) => {
        return this.commentsService.getComments(id).pipe(
          map((comments) => {
            return new WorkshopCommentsLoaded({comments});
          }),
          catchError((error) => {
            return of(new WorkshopCommentsLoadingFailed({error}));
          })

        );
      })
    );


    @Effect()
    WorkshopAddComment$ = this.actions$
    .pipe(
      ofType<WorkshopAddComment>(WorkshopsActionTypes.WorkshopAddComment),
      map( (action: WorkshopAddComment) => action.payload),
      exhaustMap( ({postId, comment}: { postId: string, comment: Comment1}) => {
       return this.commentsService.createComment(postId, comment.text).pipe(
        map((data) => {
          data = data.comment;
          return new WorkshopCommentAdded({comment: data});
        }),
        catchError((error) => {
          return of(new WorkshopCommentsLoadingFailed({error}));
        })
        );
      })
    );


    @Effect()
    WorkshopDeleteComment$ = this.actions$
    .pipe(
      ofType<WorkshopDeleteComment>(WorkshopsActionTypes.WorkshopDeleteComment),
      map( (action: WorkshopDeleteComment) => action.payload),
      exhaustMap( ({ postId, commentId  }: {postId: string, commentId: string}) => {
       return this.commentsService.deleteComment(postId, commentId).pipe(
        map((data) => {
          return new WorkshopCommentDeleted({commentId: commentId});
        }),
        catchError((error) => {
          return of(new WorkshopCommentsLoadingFailed({error}));
        })
        );
      })
    );

    @Effect()
    WorkshopUpdateComment$ = this.actions$
    .pipe(
      ofType<WorkshopUpdateComment>(WorkshopsActionTypes.WorkshopUpdateComment),
      map( (action: WorkshopUpdateComment) => action.payload),
      exhaustMap( ({ postId, commentId, text  }: {postId: string, commentId: string, text: string}) => {
       return this.commentsService.updateComment(postId, commentId, text).pipe(
        map((data) => {
          data = data.comment;
          console.log(data);
          return new WorkshopCommentUpdated({id: data._id, changes: {text: data.text} });
        }),
        catchError((error) => {
          return of(new WorkshopCommentsLoadingFailed({error}));
        })
        );
      })
    );

}
