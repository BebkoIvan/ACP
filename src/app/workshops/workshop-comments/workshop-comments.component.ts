import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';
import { CommentsService } from 'src/app/shared/services/comments-service/comments.service';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { WorkshopCommentsRequested } from '../store/workshops.actions';
import { selectAllComments } from '../store/workshops.selectors';

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



    // addComment(comment: Comment1) {
    //     this.commentsService.createComment(this.id, comment.text).subscribe(data => {
    //         const comment1 = data.comment;
    //         this.comments.push(comment1);
    //         this.cdr.detectChanges();
    //     });

    // }

    // deleteComment(comment: Comment1) {
    //     this.commentsService.deleteComment(this.id, comment._id).subscribe(data =>  console.log(data));
    //     this.comments.splice(this.comments.indexOf(comment), 1);
    // }
}
