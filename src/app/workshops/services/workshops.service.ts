import { Injectable } from '@angular/core';
import {Workshops} from '../workshops-data/workshops';
@Injectable({
  providedIn: 'root'
})
export class WorkshopsService {

  constructor() { }

  workshops:Workshop[]=Workshops;
  getAllWorkShops():Workshop[]{
    return this.workshops;
  }

  getWorkShop(id:number):Workshop{
    function isNeeded(element:Workshop) {
      return element.id==id;
    }
    
    return this.workshops.find(isNeeded);
    
}
}
