import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { CommentsService } from 'src/app/shared/services/comments-service/comments.service';
import { Observable, Subscription, Subscriber, combineLatest, pipe } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectTags, selectWorkshop } from '../store/workshops.selectors';
import { WorkshopRequested, WorkshopLoaded, TagsRequested, ToggleReaction } from '../store/workshops.actions';
import { take } from 'rxjs/operators';
import { ReactionsService } from 'src/app/shared/services/reactions.service';
import { selectAuthData } from 'src/app/auth/store/auth.selectors';

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
    dislikeActive = false;
    starActive = false;
    acaActive = true;
    tagsSubscription: Subscription;
    reactionsCounts: any;
    unitedSubscription: Subscription;
    reactSubscription : Subscription;
    reactions$: Observable<any>;
    tagsList: Array<any> = [];
    allTags;
    tags$;

    acaHandler(): void {
        this.acaActive = !this.acaActive;
    }

    constructor(private route: ActivatedRoute, public _commentsService: CommentsService, private reactionsService: ReactionsService,
                private _workshopsService: WorkshopsService, private _tagsService: TagsService, private cdr: ChangeDetectorRef,
                private store: Store<AppState>) {

        this.id = route.snapshot.params.id;
    }

    dislikeClick() {
        this.store.dispatch(new ToggleReaction({reactionType: 'uni', postId: this.id}));
        this.dislikeActive = !this.dislikeActive;
        if (this.dislikeActive) {
            this.reactionsCounts.uni += 1;
        }
        else{
            this.reactionsCounts.uni -= 1;
        }
        this.cdr.detectChanges();
    }

    likeClick() {
        this.store.dispatch(new ToggleReaction({reactionType: 'likes', postId: this.id}));
        this.likeActive = !this.likeActive;
        if (this.likeActive) {
            this.reactionsCounts.likes += 1;
        }
        else{
            this.reactionsCounts.likes -= 1;
        }
        this.cdr.detectChanges();
    }

    starClick(e: Event) {
        this.store.dispatch(new ToggleReaction({reactionType: 'stars', postId: this.id}));
        this.starActive = !this.starActive;

        if (this.starActive) {
            this.reactionsCounts.stars += 1;
        }
        else{
            this.reactionsCounts.stars -= 1;
        }
        this.cdr.detectChanges();
    }

    

    ngOnInit() {
        this.reactions$ = this.reactionsService.getReactionsByPostId(this.id);
        this.workshop$ = this.store.pipe(select(selectWorkshop));
        this.store.dispatch(new WorkshopRequested({id: this.id}));


        this.tagsSubscription = this.store.pipe(select(selectTags), take(1)).subscribe(tags => {
            if (!tags) {
               this.store.dispatch(new TagsRequested({}));
            }
        });

        this.unitedSubscription =  combineLatest(this.store.pipe(select(selectTags), take(2)), this.workshop$).subscribe(
            data => {
                if (data[0] && data[1]) {
                    this.tagsList = [];
                    data[1].tags.forEach(el =>
                                    this.tagsList.push(
                                        {tagTitle: data[0].find(x => x.seq === el).name, isActive: false, seq: el }
                                    )
                                );
                    this.cdr.detectChanges();
                }
            }
        );
        
        this.reactSubscription = combineLatest(this.store.pipe(select(selectAuthData)), this.reactions$).subscribe(data => {
            this.reactionsCounts = data[1].reactionsCounts;
            if (data[1].reactionsAuthors.likes.includes(data[0]._id)) {
                this.likeActive = true;
            }
            if (data[1].reactionsAuthors.stars.includes(data[0]._id)) {
                this.starActive = true;
            }
            if (data[1].reactionsAuthors.uni.includes(data[0]._id)) {
                this.dislikeActive = true;
            }
            this.cdr.detectChanges();
        });
    }

    ngOnDestroy(): void {
        this.unitedSubscription.unsubscribe();
        this.reactSubscription.unsubscribe();
        this.store.dispatch(new WorkshopLoaded({workshop: null}));

    }


}
