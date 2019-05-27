import { Injectable } from '@angular/core';
import {Workshops} from '../workshops-data/workshops';
import { UserInfoService } from 'src/app/services/user-info.service';
@Injectable({
  providedIn: 'root'
})
export class WorkshopsService {

  constructor(private user:UserInfoService) {}

  workshops:Workshop[]=Workshops;

  getWorkShops(id:number):Workshop[]{

    if(id){
        return this.workshops.filter((elem:Workshop)=>{return elem.id==id});
    }

    else{
        return this.workshops;
    }
    
  }

  filteredWorkshops(category:string){
    if(category==="All"){
        return this.workshops;
    }
    else if(category==="My Workshops"){
        return this.workshops.filter((elem:Workshop)=>{return this.user.profile.myWorkshops.indexOf(elem.id)>-1});   
    }
    else if(category==="Favorite"){
        return this.workshops.filter((elem:Workshop)=>{return this.user.profile.favoriteWorkshops.indexOf(elem.id)>-1});
    }
  }

}
