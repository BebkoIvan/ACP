import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SignInRequested= '[Auth] Tried to Sign In',
  SignedIn= '[Auth] Successfully Signed In',
  SignInFailed= '[Auth] Failed to Sign In',
  SignedOut= '[Auth] Signed Out'
  
  
}


export class SignInRequested implements Action {
  readonly type = AuthActionTypes.SignInRequested;
  constructor(public payload: { credentials, redirectTo: string}) {}
}

export class SignedIn implements Action {
  readonly type = AuthActionTypes.SignedIn;
  constructor(public payload: {authData: Partial<AuthData>}) {}
}

export class SignInFailed implements Action {
  readonly type = AuthActionTypes.SignInFailed;
  constructor(public payload: { error: any }) {}
}

export class SignedOut implements Action {
  readonly type = AuthActionTypes.SignedOut;
}


export type AuthActions =
SignInFailed |
SignInRequested |
SignedIn |
SignedOut
;
