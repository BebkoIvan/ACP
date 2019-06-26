import { Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { QuizzesActions, QuizzesActionTypes } from './quizzes.actions';
import { ɵConsole } from '@angular/core';

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export interface QuizzesState extends EntityState<any> {}

export const initialState: QuizzesState = adapter.getInitialState({});

export function quizzesReducer(state = initialState, action: QuizzesActions): QuizzesState {
  switch (action.type) {
    
    case QuizzesActionTypes.QuizzesLoaded:
    return adapter.addAll(action.payload.quizzes, state);

    default:
      return state;
  }
}

export const{
  selectAll
} = adapter.getSelectors();