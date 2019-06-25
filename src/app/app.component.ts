import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.pug',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ACP';
    menuActive: Boolean = false;
    aca_active: Boolean = false;
    // profile: User = {
    //     name: 'Jeff',
    //     lastname: 'Bezos',
    //     imgSrc: '/assets/images/Jeff.png',
    //     link: '',
    //     myWorkshops: [1, 3],
    //     favoriteWorkshops: [2, 4]
    // };

    constructor(public userService:AuthService) {}

    ngOnInit() {
        if (localStorage.getItem('token')){
            this.userService.setUser();
        }

    }

    handleMenuClick() {
        this.menuActive = !this.menuActive;
    }

}
