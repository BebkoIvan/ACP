import { Injectable } from '@angular/core';
import {Workshops} from '../workshops-data/workshops';
@Injectable({
  providedIn: 'root'
})
export class WorkshopsService {

  constructor() { }

  workshops:Workshop[]=Workshops;

  getWorkShops(id:number):Workshop[]{
    function isNeeded(element:Workshop) {
        return element.id==id;
      }
    if(id){
        return this.workshops.filter(isNeeded);
    }
    else{
        return this.workshops;
    }
    
  }

}
