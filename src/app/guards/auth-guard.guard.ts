import { Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { selectAuthenticated, selectAuthData, selectAuthenticatedToken, selectAuthState } from '../auth/store/auth.selectors';
import { take, map } from 'rxjs/operators';
import { SignedIn } from '../auth/store/auth.actions';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private store: Store<AppState>, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean>
        | Promise<boolean>
        | boolean {
            return this.store.pipe(
                select(selectAuthenticated),
                take(1),
                map((authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    }
                    else {
                        const token = this.authService.getToken();
                        if (token) {
                            this.authService.getCurrentUser().subscribe( (data: AuthData) => {
                                this.store.dispatch(new SignedIn({authData: data}));
                            });
                            return true;
                        }
                        else {
                            this.router.navigate(['/login']);
                        }
                    }
                })
            );
            }
}
