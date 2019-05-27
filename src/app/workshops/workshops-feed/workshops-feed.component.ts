import { Component, OnInit,Input,HostListener } from "@angular/core";
import { WorkshopsService } from '../services/workshops.service';
import { ActivatedRoute } from '@angular/router';
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
    constructor(private ActivatedRoute:ActivatedRoute) {}



    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => this.workshops=data.workshops);
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
