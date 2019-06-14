import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
import { WorkshopsService } from '../services/workshops.service';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
@Component({
    selector: 'app-workshops-feed',
    templateUrl: './workshops-feed.component.pug',
    styleUrls: ['./workshops-feed.component.scss'],
})
export class WorkshopsFeedComponent implements OnInit {
    workshops: [];
    categories: string[] = ['All', 'My Workshops', 'Favorite'];
    user: User;
    serverTags = [];

    constructor(private route: ActivatedRoute, private _user: UserInfoService,
                private _workshopsService: WorkshopsService, private router: Router, private _tagsService: TagsService) {
        if (!route.snapshot.queryParams.category) {
            this.router.navigate([''], {
                queryParams: {  category: 'All' },
                queryParamsHandling: 'merge'
            });

        }
    }


    ngOnInit() {
        if (!this._workshopsService.allWorkshops) {
            this._workshopsService.setPosts();
        }
        this.route.data.subscribe(data => {this.workshops = data.workshops[0].posts ? data.workshops[0].posts : data.workshops;

                                           if (!this._tagsService.allTags.length) {
                                            this._tagsService.allTags = data.workshops[1];
                                           }
                                           if (!this.serverTags.length) {
                                            this._tagsService.allTags.forEach(el => this.serverTags.push(el));
                                            }

                                        } );

    }

}
