import { Component, OnInit,Input,HostListener } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
@Component({
    selector: "app-workshops-feed",
    templateUrl: "./workshops-feed.component.pug",
    styleUrls: ["./workshops-feed.component.scss"],
})
export class WorkshopsFeedComponent implements OnInit {

    scrollTop:number;
    topPosToStartShowing:number = 150;
    workshops:Workshop[];
    categories:string[]=["All","My Workshops","Favorite"];
    user:User;
    constructor(private route:ActivatedRoute,private _user:UserInfoService) {}


    ngOnInit() {
        this.route.data.subscribe(data => this.workshops=data.workshops);
        this.route.queryParams.subscribe(params => console.log(params));
        this.user=this._user.profile;
    }

  
    
    @HostListener('scroll', ['$event'])onScroll($event:Event):void {
            this.scrollTop=$event.srcElement.scrollTop;
            
    };

    
    scroll():void {
        let el=document.getElementById("topel");
        el.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
      }

        
    
}
