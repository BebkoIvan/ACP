import { Component, OnInit,EventEmitter,Input,Output, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAuthData } from 'src/app/auth/store/auth.selectors';

@Component({
    selector: 'app-top-pane',
    templateUrl: './top-pane.component.pug',
    styleUrls: ['./top-pane.component.scss']
})

export class TopPaneComponent implements OnInit {
    logoSrc = '/assets/images/logo.png';
    searchActive = false;
    @ViewChild('searchInput') searchField: ElementRef;
    
    @Input() menuActive: boolean;

    profile;

    @Output()menuClick = new EventEmitter();

    constructor(public userService: AuthService, private store: Store<AppState>, private router: Router) {}

    menuHandler(e: Event): void {
      this.menuClick.emit();
    }

    goProfile(e: Event): void {
        this.router.navigate(['/profile']);
    }

    ngOnInit() {
        this.store.select(selectAuthData).subscribe(data => this.profile = data);
    }

    handleSearchClick(e: Event) {
        this.searchActive = !this.searchActive;
        if (this.searchActive) {
            setTimeout(() => {
                this.searchField.nativeElement.focus();
              }, 0);
        }
    }
}
