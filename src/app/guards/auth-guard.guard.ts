import { Injectable } from "@angular/core";
import {UserAuthService} from "../services/user-auth.service"
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthGuardGuard implements CanActivate {

    constructor(private _userAuthService:UserAuthService){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean>
        | Promise<boolean>
        | boolean {
            if(this._userAuthService.isAuth()){
                return true;
            }
            console.log("guard works");

            return false;
        
    }
}