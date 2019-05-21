import { Component, OnInit,EventEmitter,Input,Output, ErrorHandler } from "@angular/core";

@Component({
    selector: "app-top-pane",
    templateUrl: "./top-pane.component.pug",
    styleUrls: ["./top-pane.component.scss"]
})

export class TopPaneComponent implements OnInit {

    constructor() {}

    logoSrc="/assets/images/logo.png";
    searchActive: Boolean = false;
  
    @Input() menuActive:boolean;

    @Input() profile:User;

    @Output()menuClick = new EventEmitter();

    menu_handler(e:Event):void{
      this.menuClick.emit();
    }

    ngOnInit() {
    }

    handleSearchClick(e: Event) {
        this.searchActive = !this.searchActive;
    }
}
