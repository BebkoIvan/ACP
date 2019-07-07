import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { map, take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { ConfirmPopupService } from 'src/app/core/services/confirm-popup.service';
import { DeleteWorkshop, ToggleReaction } from '../store/workshops.actions';
import { AuthService } from 'src/app/services/auth.service';
import { selectAuthData } from 'src/app/auth/store/auth.selectors';
import { WorkshopsService } from '../services/workshops.service';
import { ReactionsService } from 'src/app/shared/services/reactions.service';


@Component({
    selector: 'app-article',
    templateUrl: './article.component.pug',
    styleUrls: ['./article.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnChanges {
    constructor(private route: ActivatedRoute, private router: Router,
                private store: Store<AppState>, private reactionsService: ReactionsService,
                private _tagsService: TagsService, private workshopsService: WorkshopsService,
                private confirmPopupService: ConfirmPopupService, private authService: AuthService) {}

    @Input() workshop: any;
    tagsList: Array<any> = [] ;
    tags$: Observable<any>;
    likeActive = false;
    starActive = false;
    dislikeActive = false;
    isEditable = false;
    authSubscription: Subscription;
    author$;
    @Input() allTags = [];

    dislikeClick() {
        this.store.dispatch(new ToggleReaction({reactionType: 'uni', postId: this.workshop.id}));
        this.dislikeActive = !this.dislikeActive;
    }

    likeClick() {
        this.store.dispatch(new ToggleReaction({reactionType: 'likes', postId: this.workshop.id}));
        this.likeActive = !this.likeActive;
    }

    starClick(e: Event) {
        this.store.dispatch(new ToggleReaction({reactionType: 'stars', postId: this.workshop.id}));
        this.starActive = !this.starActive;
    }

    ngOnInit() {
        this.author$ = this.authService.getUserById(this.workshop.author).pipe(
            map((user) => user.username)
          );

        this.authSubscription = this.store.pipe(select(selectAuthData)).subscribe(user => {
            if (!user) {
              return;
            }
            if (this.workshop.reactionsAuthors.likes.includes(user._id)) {
                this.likeActive = true;
            }
            if (this.workshop.reactionsAuthors.uni.includes(user._id)) {
                this.dislikeActive = true;
            }
            if (this.workshop.reactionsAuthors.stars.includes(user._id)) {
                this.starActive = true;
            }
            if (this.workshop.author === user._id || user.role === 'admin') {
                this.isEditable = true;
            } else {
                this.isEditable = false;
            }
        });




    }

    ngOnChanges(): void {
        if (this.allTags) {
            this.workshop.tags.forEach(el =>
                this.tagsList.push(
                    {tagTitle: this.allTags.find(x => x.seq === el).name, isActive: false, seq: el }
                )
            );
        }
    }

    deletePost() {
        this.confirmPopupService.confirm({
            title: 'Delete workshop',
            message: 'Do you want to delete this workshop?'
          }).subscribe((confirmed: boolean) => {
            this.store.dispatch(new DeleteWorkshop({workshopId: this.workshop.id}));
          });
    }

    goEdit() {
        this.router.navigate([`workshops/${this.workshop.id}/edit`]);
    }
}
