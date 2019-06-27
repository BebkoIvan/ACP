import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
import { WorkshopsService } from '../services/workshops.service';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import {ArticlesRequested, TagsRequested } from '../store/workshops.actions';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { selectAllArticles, selectAllTags } from '../store/workshops.selectors';

@Component({
    selector: 'app-workshops-feed',
    templateUrl: './workshops-feed.component.pug',
    styleUrls: ['./workshops-feed.component.scss'],
})
export class WorkshopsFeedComponent implements OnInit {
    workshops;
    workshops$: Observable<any>;
    tags$: Observable<any>;
    categories: string[] = ['All', 'My Workshops', 'Favorite'];
    user: User;
    intialParams;
    serverTags = [];

    constructor(private route: ActivatedRoute,
                private workshopsService: WorkshopsService,
                private store: Store<AppState>, private router: Router,
                private _tagsService: TagsService) {
                    
                    route.queryParams.subscribe(p => this.store.dispatch(new ArticlesRequested({queryParams: p })));

                    this.workshops$ = this.store.pipe(
                        select(selectAllArticles)
                        );

                    this.tags$ = this.store.pipe(
                         select(selectAllTags)
                     );



                    if (!route.snapshot.queryParams.category) {
            this.router.navigate([''], {
                queryParams: {  category: 'All' },
                queryParamsHandling: 'merge'
            });

        }
    }


    ngOnInit() {
        this.store.dispatch(new TagsRequested({}));
    }
}
