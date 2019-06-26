import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { WorkshopsService } from '../services/workshops.service';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { WorkshopsRequested, WorkshopsActionTypes, WorkshopsLoaded, WorkshopsLoadingFailed } from './workshops.actions';
import { of } from 'rxjs';



@Injectable()
export class WorkshopsEffects {



  constructor(private actions$: Actions, private workshopsService: WorkshopsService) {}

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

}
