import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { CommentsService } from 'src/app/shared/services/comments-service/comments.service';
import { Observable, Subscription, Subscriber, combineLatest, pipe } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAllTags, selectWorkshop } from '../store/workshops.selectors';
import { WorkshopRequested, WorkshopLoaded, TagsRequested } from '../store/workshops.actions';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-workshop-page',
    templateUrl: './workshop-page.component.pug',
    styleUrls: ['./workshop-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkshopPageComponent implements OnInit {

    id: string;
    workshop;
    workshop$: Observable<any>;
    likeActive = false;
    acaActive = true;
    tagsSubscription: Subscription;
    unitedSubscription: Subscription;
    tagsList: Array<any> = [];
    allTags;
    tags$;

    acaHandler(): void {
        this.acaActive = !this.acaActive;
    }

    constructor(private route: ActivatedRoute, public _commentsService: CommentsService,
                private _workshopsService: WorkshopsService, private _tagsService: TagsService, private cdr: ChangeDetectorRef,
                private store: Store<AppState>) {

        this.id = route.snapshot.params.id;
    }

    ngOnInit() {
        this.workshop$ = this.store.pipe(select(selectWorkshop));
        this.store.dispatch(new WorkshopRequested({id: this.id}));

        this.tagsSubscription = this.store.pipe(select(selectAllTags), take(1)).subscribe(tags => {
            if (!tags.length) {
               this.store.dispatch(new TagsRequested({}));
            }
        });

        this.unitedSubscription =  combineLatest(this.store.pipe(select(selectAllTags), take(2)), this.workshop$).subscribe(
            data => {
                if (data[0].length && data[1]) {
                    data[1].tags.forEach(el =>
                                    this.tagsList.push(
                                        {tagTitle: data[0].find(x => x.seq === el).name, isActive: false, seq: el }
                                    )
                                ); 
                    this.cdr.detectChanges();
                }
            }
        );


    }

    ngOnDestroy(): void {
        this.unitedSubscription.unsubscribe();
        this.store.dispatch(new WorkshopLoaded({workshop: null}));

    }



    likec() {
        if (this.likeActive) {
            this.workshop.likes -= 1;
        } else {
            this.workshop.likes += 1;
        }
        this.likeActive = !this.likeActive;
    }

}
