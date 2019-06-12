import { Component, OnInit,EventEmitter,Input,Output, ViewChild, ElementRef } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
    selector: 'app-top-pane',
    templateUrl: './top-pane.component.pug',
    styleUrls: ['./top-pane.component.scss'],
})

export class TopPaneComponent implements OnInit {
    logoSrc = '/assets/images/logo.png';
    searchActive = false;
    @ViewChild('searchInput') searchField: ElementRef;
    
    @Input() menuActive: boolean;

    profile;

    @Output()menuClick = new EventEmitter();

    constructor(public userService: UserAuthService) {}

    menuHandler(e: Event): void {
      this.menuClick.emit();
    }

    ngOnInit() {
        if (this.userService.isAuth) {
            this.userService.setUser();
        }
    }

    handleSearchClick(e: Event) {
        this.searchActive = !this.searchActive;
        if(this.searchActive) {
            setTimeout(() => {
                this.searchField.nativeElement.focus();
              }, 0);
        }
    }
}
