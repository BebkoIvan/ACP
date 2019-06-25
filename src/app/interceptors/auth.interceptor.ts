import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class MyInterceptor implements HttpInterceptor {
    constructor(private userAuth: AuthService) {}

    errorHandler = (errorResponse: HttpErrorResponse) => {
        const clonedError = {...errorResponse};
        const status = clonedError.status;
        if (status === 400) {
            alert(errorResponse.error.message);
        }

        return throwError(errorResponse);

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

       const token = this.userAuth.getToken();
       let paramReq = req.clone({
        headers: req.headers.append('Content-Type', ' application/json')
    });

       if (token) {
         paramReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${token}`)
        });
    }
       return next.handle(paramReq).pipe(
        catchError(this.errorHandler)
    );
    }
}
