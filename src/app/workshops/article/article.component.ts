import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.pug',
    styleUrls: ['./article.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router, private _tagsService: TagsService) {}
    @Input() workshop: any;
    // @Input() workshop: Workshop;
    tagsList: Array<any> = [];
    likeactive = false;
    @Input() allTags = [];

    likec() {
        if (this.likeactive) {
            this.workshop.likes -= 1;
        }
        else {
            this.workshop.likes += 1;
        }

        this.likeactive = !this.likeactive;
    }

    ngOnInit() {
        this.workshop.tags.forEach(el => {
            this.tagsList.push(this._tagsService.getTagName(el));
        });
    }
}
