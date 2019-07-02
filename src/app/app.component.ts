import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { SignedIn } from './auth/store/auth.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.pug',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ACP';
    menuActive: boolean = false;

    constructor(public authService: AuthService, private store: Store<AppState>) {}

    ngOnInit() {
        const token = this.authService.getToken();
        if (token) {
        this.authService.getCurrentUser().subscribe( (data: AuthData) => {
            this.store.dispatch(new SignedIn({authData: data}));
        });
    }
}

        handleMenuClick() {
        this.menuActive = !this.menuActive;
    }

}
