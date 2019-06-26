import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { WorkshopsService } from '../services/workshops.service';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { WorkshopsRequested, WorkshopsActionTypes, WorkshopsLoaded, WorkshopsLoadingFailed, WorkshopsTagsRequested, WorkshopsTagsLoaded, WorkshopsTagsLoadingFailed } from './workshops.actions';
import { of } from 'rxjs';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';



@Injectable()
export class WorkshopsEffects {



  constructor(private actions$: Actions, private workshopsService: WorkshopsService, private tagsService: TagsService) {}

  @Effect()
  WorkshopsRequested$ = this.actions$
  .pipe(
    ofType<WorkshopsRequested>(WorkshopsActionTypes.WorkshopsRequested),
    map( (action: WorkshopsRequested) => action.payload),
    exhaustMap((queryParams: any) => {
      return this.workshopsService.getWorkshops(queryParams).pipe(
        map((workshops) => {
          if (workshops.posts) {
            workshops = workshops.posts;
            return new WorkshopsLoaded({workshops});
          }
          else{
            return new WorkshopsLoaded({workshops:[]});
          }
        }),
        catchError((error) => {
          return of(new WorkshopsLoadingFailed({error}));
        })

      );
    })
  );

  // @Effect()
  // WorkshopsTagsRequested$ = this.actions$
  // .pipe(
  //   ofType<WorkshopsTagsRequested>(WorkshopsActionTypes.WorkshopsTagsRequested),
  //   map( (action: WorkshopsTagsRequested) => action.payload),
  //   exhaustMap(() => {
  //     return this.tagsService.getTags('all').pipe(
  //       map((tags) => {
  //           return new WorkshopsTagsLoaded(tags);
  //       }),
  //       catchError((error) => {
  //         return of(new WorkshopsTagsLoadingFailed({error}));
  //       })

  //     );
  //   })
  // );

}
