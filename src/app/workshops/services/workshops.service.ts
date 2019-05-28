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

  filtered(category:string,tag:string){
      let filteredWorkshops:Workshop[]=this.workshops;
      if(category){
    if(category==="All"){
        filteredWorkshops = this.workshops;
    }
    else if(category==="My Workshops"){
        filteredWorkshops= this.workshops.filter((elem:Workshop)=>{return this.user.profile.myWorkshops.includes(elem.id)});   
    }

    else if(category==="Favorite"){
        filteredWorkshops= this.workshops.filter((elem:Workshop)=>{return this.user.profile.favoriteWorkshops.includes(elem.id)});
    }
  }

    if(tag){
      console.log(tag);
        if(tag.indexOf(',')>-1){
          let tagsList:string[]=tag.split(',');
          filteredWorkshops=filteredWorkshops.filter((elem:Workshop)=>{return tagsList.every((tag)=>elem.tagsList.includes(tag))});
        }

        else{
          filteredWorkshops=filteredWorkshops.filter((elem:Workshop)=>{return elem.tagsList.includes(tag)});
        }
        
        
        
    }
    

    return filteredWorkshops;
  }


}
