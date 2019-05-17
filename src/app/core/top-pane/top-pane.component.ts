import { Component, OnInit,EventEmitter,Input,Output, ErrorHandler } from "@angular/core";

@Component({
    selector: "app-top-pane",
    templateUrl: "./top-pane.component.pug",
    styleUrls: ["./top-pane.component.scss"]
})
export class TopPaneComponent implements OnInit {
    constructor() {}
    search_active: Boolean = false;
    profile: { user_name: string; get_img(): string } = {
        user_name: "Jeff Bezos",
        get_img() {
            return (
                "/assets/images/" +
                this.user_name.substr(0, this.user_name.indexOf(" ")) +
                ".png"
            );
        }
    };
    @Input() menu_active:boolean;
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
