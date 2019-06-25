import { Action } from '@ngrx/store';
import { AuthActionTypes, AuthActions } from './auth.actions';


export interface AuthState {
  authenticated: boolean;
  authData: Partial<AuthData> | null;
}

export const initialState: AuthState = {
  authenticated: false,
  authData: null
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.SignedIn:

    return {
      ...state,
      authenticated: true,
      authData: action.payload.authData
    };

    case AuthActionTypes.SignedOut:

    return {
      ...state,
      authenticated: false,
      authData: null
    };
    default:
      return state;
  }
}
