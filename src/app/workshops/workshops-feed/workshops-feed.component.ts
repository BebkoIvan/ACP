import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
import { WorkshopsService } from '../services/workshops.service';
import { Tags } from '../workshops-data/tags';
@Component({
    selector: 'app-workshops-feed',
    templateUrl: './workshops-feed.component.pug',
    styleUrls: ['./workshops-feed.component.scss'],
})
export class WorkshopsFeedComponent implements OnInit {
    workshops: Workshop[];
    categories: string[] = ['All', 'My Workshops', 'Favorite'];
    user: User;
    tagsList = Tags;
    
    constructor(private route: ActivatedRoute, private _user: UserInfoService,
                private _workshopsService: WorkshopsService, private router: Router) {
        if (!route.snapshot.params.category) {
            this.router.navigate([''], {
                queryParams: {  category: 'All' },
                queryParamsHandling: 'merge'
            });

        }
    }


    ngOnInit() {
        this.route.data.subscribe(data => this.workshops = data.workshops);
        this.user = this._user.profile;
        // this._workshopsService.getFromServer().subscribe(data => console.log(data));
    }

}
