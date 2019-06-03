import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-comment-card',
    templateUrl: './comment-card.component.pug',
    styleUrls: ['./comment-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentCardComponent implements OnInit {
    likeActive = false;

    @Input() comment: Comment1;

    @Output() commentDeleted: EventEmitter<Comment1> =   new EventEmitter();
    
    constructor() {}

    ngOnInit() {}

    likeClick(): void {
        if (this.likeActive) {
            this.comment.likes -= 1;
        } else {
            this.comment.likes += 1;
        }
        this.likeActive = !this.likeActive;
    }

    deleteComment(e:Event){
        e.preventDefault();
        this.commentDeleted.emit(this.comment);
    }
}
