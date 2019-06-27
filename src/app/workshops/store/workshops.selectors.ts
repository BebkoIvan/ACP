import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromWorkshops from './workshops.reducer';
 
export const selectWorkshopsState = createFeatureSelector<fromWorkshops.WorkshopsState>('workshops');

export const selectArticlesState = createSelector(selectWorkshopsState, fromWorkshops.selectArticlesState);
export const selectCommentsState = createSelector(selectWorkshopsState, fromWorkshops.selectCommentsState);
export const selectTagsState = createSelector(selectWorkshopsState, fromWorkshops.selectTagsState);

export const selectAllArticles = createSelector(selectArticlesState, fromWorkshops.selectAllArticles);
export const selectAllComments = createSelector(selectCommentsState, fromWorkshops.selectAllComments);
export const selectAllTags = createSelector(selectTagsState, fromWorkshops.selectAllTags);

export const selectWorkshop = createSelector(
    selectWorkshopsState,
    (state: fromWorkshops.WorkshopsState) => state.workshopSelected.workshop
);

