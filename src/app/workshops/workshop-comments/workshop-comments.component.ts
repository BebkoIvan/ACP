import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';
import { CommentsService } from 'src/app/shared/services/comments-service/comments.service';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { WorkshopCommentsRequested, WorkshopAddComment, WorkshopDeleteComment } from '../store/workshops.actions';
import { selectAllComments } from '../store/workshops.selectors';
import { QuizzesRequested } from 'src/app/quizzes/store/quizzes.actions';

@Component({
    selector: 'app-workshop-comments',
    templateUrl: './workshop-comments.component.pug',
    styleUrls: ['./workshop-comments.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkshopCommentsComponent implements OnInit {
    id: string;
    isLoaded: Observable<any>;
    comments$: Observable<Comment1[]>;
    constructor(private route: ActivatedRoute, private workshopsService: WorkshopsService,
                private store: Store<AppState>, private cdr: ChangeDetectorRef, public commentsService: CommentsService) {
        this.id = route.parent.snapshot.params.id;
    }

    ngOnInit() {
        this.store.dispatch(new WorkshopCommentsRequested({id: this.id}));
        this.comments$ = this.store.pipe(select(selectAllComments));
    }



    addComment(comment: Comment1) {
        this.store.dispatch(new WorkshopAddComment({postId: this.id, comment: comment}));

    }

    deleteComment(comment: Comment1) {
        this.store.dispatch(new WorkshopDeleteComment({postId: this.id, commentId: comment._id}));
    }
}
