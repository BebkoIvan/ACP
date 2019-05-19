import { Component, OnInit,EventEmitter,Input,Output, ErrorHandler } from "@angular/core";

@Component({
    selector: "app-top-pane",
    templateUrl: "./top-pane.component.pug",
    styleUrls: ["./top-pane.component.scss"]
})

export class TopPaneComponent implements OnInit {

    constructor() {}

    logoSrc="/assets/images/logo.png";
    search_active: Boolean = false;
  
    @Input() menu_active:boolean;

    @Input() profile:User;

    @Output()menu_click = new EventEmitter();

    menu_handler(e:Event):void{
      this.menu_click.emit();
    }

    ngOnInit() {
    }

    handleSearchClick(e: Event) {
        this.search_active = !this.search_active;
    }
}
