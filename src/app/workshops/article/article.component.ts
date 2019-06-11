import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tags } from '../workshops-data/tags';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.pug',
    styleUrls: ['./article.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router) {}

    @Input() workshop: Workshop;
    tagsList: Array<any> = [];
    likeactive = false;
    allTags = Tags;

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
        this.workshop.tagsList.forEach(elem => {
            this.tagsList.push();
        });
        this.workshop.tagsList.forEach(element => {this.tagsList.push({
            tagTitle: this.allTags.find(x => x.id === element).tagTitle, isActive: false, id: element
        })});
    }
}
