import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api-service/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  token: any;
  isAuth = false;
  constructor(private _api: ApiService) { }

  static prepareHeaders(username, password) {
    return new HttpHeaders().set('Authorization', `Basic ${btoa(`${username}` + ':' + `${password}`)}`);
  }

  signIn(username, password): Observable<any> {
    return this._api.getRequest('users/login', UserAuthService.prepareHeaders(username, password));
  }

  seeTags(): Observable<any> {
    return this._api.getRequest('tags/all');
  }



}
