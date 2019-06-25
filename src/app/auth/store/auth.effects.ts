import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Injectable()
export class AuthEffects {



  constructor(private actions$: Actions,
              private router: Router,
              private authService: AuthService
    ) {}

}
