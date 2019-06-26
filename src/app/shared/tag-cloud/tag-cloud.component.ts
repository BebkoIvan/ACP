import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-tag-cloud',
    templateUrl: './tag-cloud.component.pug',
    styleUrls: ['./tag-cloud.component.scss']
})
export class TagCloudComponent implements OnInit {
    @Input() tagsList;
    tagsActivated: string;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {

            if (params.tags) {
                this.tagsActivated = params.tags;
            }

            else{
                this.tagsActivated = '';
            }
        });
    }


    handleTagClick(tag) {
        if (this.tagsActivated.split(',').includes(tag.seq.toString())) {
            const index = this.tagsActivated.split(',').indexOf(tag.seq.toString());
            const str = this.tagsActivated.split(',');
            str.splice(index, 1);
            this.tagsActivated = str.join(',');
        }
        else {
            this.tagsActivated = this.tagsActivated.concat(
                this.tagsActivated ? ',' + tag.seq : tag.seq
            );
        }

        if (this.tagsActivated) {
            this.router.navigate([''], {
                queryParams: {  tags: this.tagsActivated },
                queryParamsHandling: 'merge'
            });
        }
        else {
            this.router.navigate([''], {
                queryParams: {  tags: null },
                queryParamsHandling: 'merge'
            });
        }

    }
   
}
