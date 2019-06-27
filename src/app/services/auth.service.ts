import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api-service/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private token: any;
  constructor(private _api: ApiService,private router: Router) {}

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
    return localStorage.getItem('token');
  }
  signIn(credentials: Credentials): Observable<any> {
    return this._api.getRequest('users/login', AuthService.prepareHeaders(credentials.username, credentials.password));
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
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
