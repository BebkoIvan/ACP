import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { WorkshopsService } from '../services/workshops.service';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ArticlesRequested, WorkshopsActionTypes, ArticlesLoaded, ArticlesLoadingFailed, TagsRequested, TagsLoaded, TagsLoadingFailed, WorkshopRequested, WorkshopLoaded, WorkshopLoadingFailed } from './workshops.actions';
import { of } from 'rxjs';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';



@Injectable()
export class WorkshopsEffects {



  constructor(private actions$: Actions, private workshopsService: WorkshopsService, private tagsService: TagsService) {}

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
          }
          else{
            return new ArticlesLoaded({workshops:[]});
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

}