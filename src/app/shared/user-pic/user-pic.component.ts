import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
    selector: "app-user-pic",
    templateUrl: "./user-pic.component.pug",
    styleUrls: ["./user-pic.component.scss"],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserPicComponent implements OnInit {

    user:User;

    constructor(private _user:UserInfoService) {}

    ngOnInit() {
        this.user=this._user.profile;
    }



    initials(): string {
        return this.user.name.charAt(0) + this.user.lastname.charAt(0);
    }
}
