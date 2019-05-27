import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private auth:boolean=true;
  constructor() { }

  isAuth():boolean{
    return this.auth;
  }

}
