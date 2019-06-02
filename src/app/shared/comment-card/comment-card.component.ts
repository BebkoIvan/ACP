import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-comment-card',
    templateUrl: './comment-card.component.pug',
    styleUrls: ['./comment-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentCardComponent implements OnInit {
    likeActive = false;
    @Input() comment: Comment;

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
}
