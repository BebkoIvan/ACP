import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
    DoCheck,
    SimpleChanges,
    OnChanges,
    ChangeDetectorRef
} from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { AuthService } from 'src/app/services/auth.service';
import { CommentsService } from '../services/comments-service/comments.service';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAuthData } from 'src/app/auth/store/auth.selectors';
import { WorkshopUpdateComment } from 'src/app/workshops/store/workshops.actions';
import { selectAllComments } from 'src/app/workshops/store/workshops.selectors';
import { take, map } from 'rxjs/operators';

@Component({
    selector: 'app-comment-card',
    templateUrl: './comment-card.component.pug',
    styleUrls: ['./comment-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentCardComponent implements OnInit {
    likeActive = false;
    isEditable: boolean;
    author$: Observable<any>;
    authSubscription: Subscription;
    editing = false;

    @Input() comment:Comment1;


    @Output() commentDeleted: EventEmitter<Comment1> =   new EventEmitter();
    
    constructor(private authService: AuthService,
                private store: Store<AppState>,
                private cdr: ChangeDetectorRef, private _commentsService: CommentsService) { 
    }

    ngOnInit() {
        this.authSubscription = this.store.pipe(select(selectAuthData)).subscribe(user => {
            if (this.comment._author === user._id) {
                this.isEditable = true;
            }
            else{
                this.isEditable = false;
            }
        })
        this.author$ = this.authService.getUserById(this.comment._author);
        
    }
     
    // likeClick(): void {
    //     if (this.likeActive) {
    //         this.comment.likes -= 1;
    //     } else {
    //         this.comment.likes += 1;
    //     }
    //     this.likeActive = !this.likeActive;
    // }

    deleteComment(e: Event){
        e.preventDefault();
        this.commentDeleted.emit(this.comment);
    }

    editComment(e: Event) {
        e.preventDefault();
        this.editing = true;
    }

    updateComment(comment: Comment1) {
        this.store.dispatch(new WorkshopUpdateComment({postId: this.comment._post, commentId: this.comment.id, text: comment.text}));
        this.store.pipe(select(selectAllComments),
        take(1),
        map(() => this.editing = false));
    }
    ngOnDestroy(): void {
        this.authSubscription.unsubscribe();
    }
}
