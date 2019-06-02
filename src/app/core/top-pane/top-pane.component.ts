import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
    selector: 'app-top-pane',
    templateUrl: './top-pane.component.pug',
    styleUrls: ['./top-pane.component.scss'],
})

export class TopPaneComponent implements OnInit {
    logoSrc = '/assets/images/logo.png';
    searchActive = false;
    user: User;
    @Input() menuActive: boolean;

    @Input() profile: User;

    @Output()menuClick = new EventEmitter();

    constructor(private _user: UserInfoService) {}

    menuHandler(e: Event): void {
      this.menuClick.emit();
    }

    ngOnInit() {
        this.user = this._user.profile;
    }

    handleSearchClick(e: Event) {
        this.searchActive = !this.searchActive;
    }
}
