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
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAuthData } from 'src/app/auth/store/auth.selectors';

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
    editing = false;

    @Input() comment:Comment1;


    @Output() commentDeleted: EventEmitter<Comment1> =   new EventEmitter();
    
    constructor(private authService: AuthService,
                private store: Store<AppState>,
                private cdr: ChangeDetectorRef, private _commentsService: CommentsService) { 
    }

    ngOnInit() {
        this.store.pipe(select(selectAuthData)).subscribe(user => {
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

    editComment(e: Event){
        e.preventDefault();
        this.editing = true;
    }

    updateComment(comment: Comment1) {
        this._commentsService.updateComment(this.comment._post, this.comment.id, comment.text).subscribe(data =>
            { this.comment.text = comment.text; this.cdr.detectChanges()} );
        this.editing = false;
    }
}
