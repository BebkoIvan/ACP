import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy,
    Output,
    EventEmitter
} from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
    selector: 'app-comment-card',
    templateUrl: './comment-card.component.pug',
    styleUrls: ['./comment-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentCardComponent implements OnInit {
    likeActive = false;
    isEditable: boolean;
    @Input() comment: Comment1;

    @Output() commentDeleted: EventEmitter<Comment1> =   new EventEmitter();
    
    constructor(private _user: UserInfoService) {}

    ngOnInit() {
        if (this.comment.authorLastname === this._user.profile.lastname && this.comment.authorName === this._user.profile.name) {
            this.isEditable = true;
        }
        else{
            this.isEditable = false;
        }
    }

    likeClick(): void {
        if (this.likeActive) {
            this.comment.likes -= 1;
        } else {
            this.comment.likes += 1;
        }
        this.likeActive = !this.likeActive;
    }

    deleteComment(e: Event){
        e.preventDefault();
        this.commentDeleted.emit(this.comment);
    }
}
