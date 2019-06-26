import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromWorkshops from './workshops.reducer';
 
export const selectWorkshopsState = createFeatureSelector<fromWorkshops.WorkshopsState>('workshops');

export const selectWorkshops = createSelector(
    selectWorkshopsState,
    fromWorkshops.selectAll
    );
