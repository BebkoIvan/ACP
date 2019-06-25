import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { AuthState } from './auth.reducer';
 
export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthenticated = createSelector(
    selectAuthState,
    (state: AuthState) => state.authenticated
);

export const selectAuthData = createSelector(
    selectAuthState,
    (state: AuthState) => state.authData
);
 
export const selectAuthenticatedToken = createSelector(
  selectAuthData,
  (authData: AuthData | null) =>  authData ? authData.token : null
);

