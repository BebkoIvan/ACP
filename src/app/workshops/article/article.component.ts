import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
 

@Component({
    selector: 'app-article',
    templateUrl: './article.component.pug',
    styleUrls: ['./article.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnChanges {
    constructor(private route: ActivatedRoute, private router: Router, private store: Store<AppState>,
                private _tagsService: TagsService) {}
    @Input() workshop: any;
    tagsList: Array<any> = [] ;
    tags$: Observable<any>;
    likeactive = false;
    @Input() allTags = [];

    likec() {
        if (this.likeactive) {
            this.workshop.likes -= 1;
        } else {
            this.workshop.likes += 1;
        }

        this.likeactive = !this.likeactive;
    }

    ngOnInit() {
            
    }

    ngOnChanges(): void {
        if (this.allTags.length) {
            this.workshop.tags.forEach(el =>
                this.tagsList.push(
                    {tagTitle: this.allTags.find(x => x.seq === el).name, isActive: false, seq: el }
                )
            );
        }
    }
}
