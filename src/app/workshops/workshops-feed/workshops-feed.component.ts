import { Component, OnInit, Input, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
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
    workshops$: Observable<any>;
    paramsSubscription: Subscription;
    tagsSubscription: Subscription;
    tags$: Observable<any>;
    page;
    categories = [
        {
            name: 'All',
            isActive: false
        },

        {
         name: 'My Workshops',
         isActive: false
        },

        {
         name: 'Favorite',
         isActive: false
        }
    ];

    user: User;
    intialParams;
    serverTags = [];

    constructor(private route: ActivatedRoute,
                private workshopsService: WorkshopsService,
                private store: Store<AppState>, private router: Router,
                private _tagsService: TagsService) {

                    if (!route.snapshot.queryParams.category) {
                        this.categories.find(x => x.name === 'All').isActive = true;
                    } else {
                        this.categories.find(x => x.name === route.snapshot.queryParams.category ).isActive = true;
                    }

                    this.workshops$ = this.store.pipe(
                        select(selectAllArticles)
                        );

                    this.tags$ = this.store.pipe(
                         select(selectTags)
                     );

                    this.paramsSubscription = route.queryParams.subscribe(p => {
                    this.page = p.page ? p.page : 0;
                    this.store.dispatch(new ArticlesRequested({queryParams: p }));} );
    }


    ngOnInit() {
        this.tagsSubscription = this.tags$.pipe(take(1)).subscribe(tags => {
         if (!tags) {
            this.store.dispatch(new TagsRequested({}));
         }
     });

     

     

    }

    goCreateWs() {
        this.router.navigate(['workshops/create']);
    }

    nextPage() {

        this.router.navigate([''], {
            queryParams: {  page: ++this.page},
            queryParamsHandling: 'merge'
        });
    }

    previousPage() {
        let pageTonavigate;
        if (this.page === '1') {
            pageTonavigate = null;
        } else {
            pageTonavigate = this.page - 1;
        }

        this.router.navigate([''], {
            queryParams: {  page: pageTonavigate },
            queryParamsHandling: 'merge'
        });
    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
        this.tagsSubscription.unsubscribe();
    }
}
