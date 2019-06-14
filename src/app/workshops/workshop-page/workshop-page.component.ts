import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { CommentsService } from 'src/app/shared/services/comments-service/comments.service';

@Component({
    selector: 'app-workshop-page',
    templateUrl: './workshop-page.component.pug',
    styleUrls: ['./workshop-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkshopPageComponent implements OnInit {

    id: string;
    workshop;
    likeActive = false;
    acaActive = true;
    tagsList: Array<string> = [];
    allTags;

    acaHandler(): void {
        this.acaActive = !this.acaActive;
    }

    constructor(private route: ActivatedRoute,public _commentsService: CommentsService, 
        private _workshopsService: WorkshopsService,private _tagsService: TagsService) {
        this.id = route.snapshot.params.id;
    }

    ngOnInit() {

        this.route.data.subscribe(data => {
            this._commentsService.comments = data.workshops[2];
            if (data.workshops[0]) {
                this.workshop = data.workshops[0];
                this.allTags = data.workshops[1];
        }
        else{
            this.workshop = data.workshops;
            this.allTags = this._tagsService.allTags;
        };
            this.workshop.tags.forEach(elem => {
        this.tagsList.push(this.allTags.find(x => x.seq === elem).name);
            }); });

    }



    likec() {
        if (this.likeActive) {
            this.workshop.likes -= 1;
        } else {
            this.workshop.likes += 1;
        }
        this.likeActive = !this.likeActive;
    }

}
