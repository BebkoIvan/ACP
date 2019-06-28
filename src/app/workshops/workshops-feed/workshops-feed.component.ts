import { Component, OnInit, Input, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
import { WorkshopsService } from '../services/workshops.service';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import {ArticlesRequested, TagsRequested } from '../store/workshops.actions';
import { take, map, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { selectAllArticles, selectTags } from '../store/workshops.selectors';
import { selectAuthenticated } from 'src/app/auth/store/auth.selectors';

@Component({
    selector: 'app-workshops-feed',
    templateUrl: './workshops-feed.component.pug',
    styleUrls: ['./workshops-feed.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkshopsFeedComponent implements OnInit {
    workshops;
    workshops$: Observable<any>;
    paramsSubscription: Subscription;
    tagsSubscription: Subscription;
    tags$: Observable<any>;
    categories: string[] = ['All', 'My Workshops', 'Favorite'];
    user: User;
    intialParams;
    serverTags = [];

    constructor(private route: ActivatedRoute,
                private workshopsService: WorkshopsService,
                private store: Store<AppState>, private router: Router,
                private _tagsService: TagsService) {
                    if (!route.snapshot.queryParams.category) {
                        this.router.navigate([''], {
                            queryParams: {  category: 'All' },
                            queryParamsHandling: 'merge'
                        });
                    }
                    this.workshops$ = this.store.pipe(
                        select(selectAllArticles)
                        );

                    this.tags$ = this.store.pipe(
                         select(selectTags)
                     );

                    this.paramsSubscription = route.queryParams.subscribe(p =>
                this.store.dispatch(new ArticlesRequested({queryParams: p })));
    }


    ngOnInit() {
     this.tagsSubscription = this.tags$.pipe(take(1)).subscribe(tags => {
         if (!tags) {
            this.store.dispatch(new TagsRequested({}));
         }
     });

    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
        this.tagsSubscription.unsubscribe();
    }
}
