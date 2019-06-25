import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SignInRequested, AuthActionTypes, SignedIn, SignInFailed, SignedOut } from './auth.actions';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private router: Router,
              private authService: AuthService
    ) {}

    @Effect()
    SignInRequested$ = this.actions$
    .pipe(
      ofType<SignInRequested>(AuthActionTypes.SignInRequested),
      map( (action: SignInRequested) => action.payload),
      exhaustMap( ({credentials, redirectTo}: {credentials: Credentials, redirectTo: string}) => {

        return this.authService.signIn(credentials).pipe(
          map((authData: AuthData) => {
            this.authService.setToken(authData.token);
            this.router.navigateByUrl(redirectTo || '/workshops/feed');

            return new SignedIn({authData});
          }),

          catchError((error) => {
            return of (new SignInFailed({error}));
          })

        );
      })
    );


    @Effect({dispatch: false})
    signedOut$ = this.actions$;
}
