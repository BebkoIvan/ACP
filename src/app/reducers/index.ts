import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState, authReducer } from '../auth/store/auth.reducer';
import { WorkshopsState, workshopsReducer } from '../workshops/store/workshops.reducer';

export interface AppState {
 auth: AuthState;
 workshops: WorkshopsState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  workshops: workshopsReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
