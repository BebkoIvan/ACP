import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { map, take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { ConfirmPopupService } from 'src/app/core/services/confirm-popup.service';
import { DeleteWorkshop } from '../store/workshops.actions';
import { AuthService } from 'src/app/services/auth.service';
import { selectAuthData } from 'src/app/auth/store/auth.selectors';


@Component({
    selector: 'app-article',
    templateUrl: './article.component.pug',
    styleUrls: ['./article.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnChanges {
    constructor(private route: ActivatedRoute, private router: Router, private store: Store<AppState>,
                private _tagsService: TagsService, private confirmPopupService: ConfirmPopupService,
                private authService: AuthService) {}
    @Input() workshop: any;
    tagsList: Array<any> = [] ;
    tags$: Observable<any>;
    likeactive = false;
    isEditable = false;
    authSubscription: Subscription;
    author$;
    @Input() allTags = [];

    likec() {
        if (this.likeactive) {
            this.workshop.likes -= 1;
        } else {
            this.workshop.likes += 1;
        }

        this.likeactive = !this.likeactive;
    }

    ngOnInit() {
        this.author$ = this.authService.getUserById(this.workshop.author).pipe(
            map((user) => user.username)
          );

        this.authSubscription = this.store.pipe(select(selectAuthData)).subscribe(user => {
            if (!user) {
              return;
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
}
