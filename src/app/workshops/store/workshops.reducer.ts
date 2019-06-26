import { Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { WorkshopsActions, WorkshopsActionTypes } from './workshops.actions';

export const adapter: EntityAdapter<Workshop> = createEntityAdapter<Workshop>();

export interface WorkshopsState extends EntityState<Workshop> {}

export const initialState: WorkshopsState = adapter.getInitialState({});

export function workshopsReducer(state = initialState, action: WorkshopsActions): WorkshopsState {
  switch (action.type) {
    case WorkshopsActionTypes.WorkshopsLoaded:
    return adapter.addAll(action.payload.workshops, state);
    default:
      return state;
  }
}

export const{
  selectAll
} = adapter.getSelectors();
