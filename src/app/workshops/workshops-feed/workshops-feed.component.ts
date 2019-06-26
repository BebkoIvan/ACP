import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
import { WorkshopsService } from '../services/workshops.service';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { WorkshopsRequested, WorkshopsTagsRequested } from '../store/workshops.actions';
import { selectWorkshops } from '../store/workshops.selectors';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-workshops-feed',
    templateUrl: './workshops-feed.component.pug',
    styleUrls: ['./workshops-feed.component.scss'],
})
export class WorkshopsFeedComponent implements OnInit {
    workshops;
    workshops$: Observable<any>;
    categories: string[] = ['All', 'My Workshops', 'Favorite'];
    user: User;
    intialParams;
    serverTags = [];

    constructor(private route: ActivatedRoute,
                private workshopsService: WorkshopsService,
                private store: Store<AppState>, private router: Router,
                private _tagsService: TagsService) {
                    route.queryParams.subscribe(p => this.store.dispatch(new WorkshopsRequested({queryParams: p })));
                    if (!route.snapshot.queryParams.category) {
            this.router.navigate([''], {
                queryParams: {  category: 'All' },
                queryParamsHandling: 'merge'
            });

        }
    }


    ngOnInit() {
        this.workshops$ = this.store.pipe(select(selectWorkshops));
        this.workshops$.subscribe(data =>  this.workshops = data);
        this.route.data.subscribe(data => {
                                           if (!this._tagsService.allTags.length) {
                                            this._tagsService.allTags = data.workshops[1];
                                           }
                                           if (!this.serverTags.length) {
                                            this._tagsService.allTags.forEach(el => this.serverTags.push(el));
                                            }

                                        } );

    }

}
