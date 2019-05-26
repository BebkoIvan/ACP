import { Component, OnInit,Input,HostListener } from "@angular/core";
import { WorkshopsService } from '../workshops.service';
@Component({
    selector: "app-workshops-feed",
    templateUrl: "./workshops-feed.component.pug",
    styleUrls: ["./workshops-feed.component.scss"],
})
export class WorkshopsFeedComponent implements OnInit {

    constructor(private _workshopsService:WorkshopsService) {

    }

    ngOnInit() {
        this.workshops=this._workshopsService.getWorkShops();
    }

    scrollTop:number;
    topPosToStartShowing:number = 150;
    workshops:Workshop[];
    
    @HostListener('scroll', ['$event'])onScroll($event:Event):void {
            this.scrollTop=$event.srcElement.scrollTop;
            
    };

    
    scroll():void {
        let el=document.getElementById("topel");
        console.log(el);
        el.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
      }

        
    
}
