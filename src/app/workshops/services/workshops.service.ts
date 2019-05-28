import { Injectable } from '@angular/core';
import {Workshops} from '../workshops-data/workshops';
import { UserInfoService } from 'src/app/services/user-info.service';
import { element } from '@angular/core/src/render3';
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

  filteredByCategory(category:string,tag:string){
      let filteredWorkshops:Workshop[];
    if(category==="All"){
        filteredWorkshops = this.workshops;
    }
    else if(category==="My Workshops"){
        filteredWorkshops= this.workshops.filter((elem:Workshop)=>{return this.user.profile.myWorkshops.indexOf(elem.id)>-1});   
    }
    else if(category==="Favorite"){
        filteredWorkshops= this.workshops.filter((elem:Workshop)=>{return this.user.profile.favoriteWorkshops.indexOf(elem.id)>-1});
    }
    if(tag){
        filteredWorkshops=filteredWorkshops.filter((elem:Workshop)=>{return elem.tagsList.indexOf(tag)>-1});
    }
    

    return filteredWorkshops;
  }


}
