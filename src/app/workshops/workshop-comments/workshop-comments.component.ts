import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';
import { CommentsService } from 'src/app/shared/services/comments-service/comments.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-workshop-comments',
    templateUrl: './workshop-comments.component.pug',
    styleUrls: ['./workshop-comments.component.scss']
})
export class WorkshopCommentsComponent implements OnInit {
    id: string;
    isLoaded: Observable<any>;
    comments: Array<Comment1>;
    constructor(private route: ActivatedRoute, private _workshopsService: WorkshopsService,public _commentsService: CommentsService) {
        this.id = route.parent.snapshot.params['id'];
    }

    ngOnInit() {
        this.isLoaded = this._commentsService.getComments(this.id);
        this.isLoaded.subscribe(data => this.comments = data);
    }



    addComment(comment: Comment1) {
        this._commentsService.createComment(this.id, comment.text).subscribe(data => alert("Thank you for your comment!"));
        this.comments.unshift(comment);
    }

    deleteComment(comment: Comment1) {
        this._commentsService.deleteComment(this.id, comment._id).subscribe(data =>console.log(data));
        this.comments.splice(this.comments.indexOf(comment), 1);
    }
}
