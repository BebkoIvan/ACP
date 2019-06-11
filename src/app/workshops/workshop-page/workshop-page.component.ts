import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';
import { Tags } from '../workshops-data/tags';

@Component({
    selector: 'app-workshop-page',
    templateUrl: './workshop-page.component.pug',
    styleUrls: ['./workshop-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkshopPageComponent implements OnInit {

    id: number;
    workshop: Workshop;
    likeActive = false;
    acaActive = true;
    tagsList: Array<string> = [];
    allTags = Tags;

    acaHandler(): void {
        this.acaActive = !this.acaActive;
    }

    constructor(private route: ActivatedRoute, private _workshopsService: WorkshopsService) {
        this.id = route.snapshot.params['id'];
    }

    ngOnInit() {
       
        this.route.data.subscribe(data => this.workshop = data.workshops);
        this.workshop.tagsList.forEach(elem => {
            this.tagsList.push(this.allTags.find(x => x.id === elem).tagTitle);
        });
    }



    likec() {
        if (this.likeActive) {
            this.workshop.likes -= 1;
        } 
        else {
            this.workshop.likes += 1;
        }
        this.likeActive = !this.likeActive;
    }

}
