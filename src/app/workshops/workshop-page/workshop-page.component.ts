import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';

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
    arra: Array<number>= [1,2,3];
    range: Array<number>=[3,7];

    acaHandler(): void {
        this.acaActive = !this.acaActive;
    }

    constructor(private route: ActivatedRoute, private _workshopsService: WorkshopsService) {
        this.id = route.snapshot.params['id'];
    }

    ngOnInit() {
        this.route.data.subscribe(data => this.workshop = data.workshops);
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
