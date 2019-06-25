import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SignInRequested, AuthActionTypes } from './auth.actions';
import { map, exhaustMap } from 'rxjs/operators';
import { tap} from 'rxjs/internal/operators';
import { createCredentials } from 'crypto';



@Injectable()
export class AuthEffects {



  constructor(private actions$: Actions,
              private router: Router,
              private _authService: AuthService
    ) {}

    @Effect()
    SignInRequested$ = this.actions$
    .pipe(
      ofType<SignInRequested>(AuthActionTypes.SignInRequested),
      map((action: SignInRequested) => action.payload)),
      exhaustMap( ( {credentials,redirectTo}: {credentials: Credentials, redirectTo: string}) =>{
        return this.
      }   )

}
