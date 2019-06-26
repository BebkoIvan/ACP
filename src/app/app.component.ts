import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.pug',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ACP';
    menuActive: boolean = false;

    constructor(public userService: AuthService) {}

    ngOnInit() { }

    handleMenuClick() {
        this.menuActive = !this.menuActive;
    }

}
