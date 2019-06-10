import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UserAuthService } from '../services/user-auth.service';


@Injectable({
    providedIn: 'root'
})
export class MyInterceptor implements HttpInterceptor {
    constructor(private _userAuth: UserAuthService) {}

    errorHandler = (errorResponse: HttpErrorResponse) => {
        const clonedError = {...errorResponse};
        const status = clonedError.status;
        if (status === 400) {
            alert(errorResponse.error.message);
        }

        return throwError(errorResponse);

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

       const token = this._userAuth.token;
       const paramReq = req.clone({
        headers: req.headers.append('Accept', ' application/json')
    });

       if (token) {
        const paramReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${token}`)
        });
    }
       return next.handle(paramReq).pipe(
        catchError(this.errorHandler)
    );
    }
}