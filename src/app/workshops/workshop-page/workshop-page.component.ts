import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';

@Component({
    selector: 'app-workshop-page',
    templateUrl: './workshop-page.component.pug',
    styleUrls: ['./workshop-page.component.scss'],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class WorkshopPageComponent implements OnInit {

    id: number;
    workshop: Workshop;
    likeactive = false;
    acaActive = false;

    acaHandler(): void {
        this.acaActive = !this.acaActive;
    }

    constructor(private route: ActivatedRoute, private _workshopsService: WorkshopsService) {
        this.id = parseInt(route.snapshot.params['id']);
    }

    ngOnInit() {
        this.workshop = this._workshopsService.getOneWorkShop(this.id);
    }



    likec() {
        if (this.likeactive) {
            this.workshop.likes -= 1;
        } 
        else {
            this.workshop.likes += 1;
        }
        this.likeactive = !this.likeactive;
    }

}
