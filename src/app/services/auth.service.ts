import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api-service/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private token: any;
  isAuth = false;
  user;
  constructor(private _api: ApiService) {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.isAuth = true;
    }
  }
  static prepareHeaders(username, password) {
    return new HttpHeaders().set('Authorization', `Basic ${btoa(`${username}` + ':' + `${password}`)}`);
  }

  ngOnInit() { }


  setToken(token: any) {
    this.token = token;
    localStorage.clear();
    localStorage.setItem('token', this.token);
  }

  getToken() {
    return this.token;
  }
  signIn(username, password): Observable<any> {
    return this._api.getRequest('users/login', AuthService.prepareHeaders(username, password));
  }

  setUser() {
    this._api.getRequest('users/current').subscribe(data => this.user = data);
  }

  getCurrentUser(): Observable<any> {
    return this._api.getRequest('users/current');
  }

  updateUser(id: string, body ): Observable<any> {
    return this._api.putRequest(`users/${id}`, body);
  }

  signUp(user){
    return this._api.postRequest('users/signup', user);
  }
  getUserById(id: string): Observable<any> {
    return this._api.getRequest(`users/${id}`);
  }


}
