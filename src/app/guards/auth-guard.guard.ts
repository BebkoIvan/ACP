import { Injectable } from '@angular/core';
import {UserAuthService} from '../services/user-auth.service'
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _userAuthService: UserAuthService,private _router: Router){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean>
        | Promise<boolean>
        | boolean {
            if (this._userAuthService.isAuth){
                return true;
            }
            this._router.navigate(['/login']);

            return false;
    }
}
