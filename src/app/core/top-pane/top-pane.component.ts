import { Component, OnInit,EventEmitter,Input,Output } from "@angular/core";
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
    selector: "app-top-pane",
    templateUrl: "./top-pane.component.pug",
    styleUrls: ["./top-pane.component.scss"],
})

export class TopPaneComponent implements OnInit {

    user: User;

    constructor(private _user:UserInfoService) {}

    logoSrc:string="/assets/images/logo.png";
    searchActive: boolean = false;
  
    @Input() menuActive:boolean;

    @Input() profile:User;

    @Output()menuClick = new EventEmitter();

    menuHandler(e:Event):void{
      this.menuClick.emit();
    }

    ngOnInit() {
        this.user=this._user.profile;
    }

    handleSearchClick(e: Event) {
        this.searchActive = !this.searchActive;
    }
}
