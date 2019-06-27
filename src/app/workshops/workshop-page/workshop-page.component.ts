import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';
import { Tags } from '../workshops-data/tags';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { CommentsService } from 'src/app/shared/services/comments-service/comments.service';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAllTags, selectWorkshop } from '../store/workshops.selectors';
import { WorkshopRequested, WorkshopLoaded } from '../store/workshops.actions';

@Component({
    selector: 'app-workshop-page',
    templateUrl: './workshop-page.component.pug',
    styleUrls: ['./workshop-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkshopPageComponent implements OnInit {

    id: string;
    workshop;
    workshop$: Subscription;
    likeActive = false;
    acaActive = true;
    tagsList: Array<any> = [];
    allTags;
    tags$: Observable<any>;

    acaHandler(): void {
        this.acaActive = !this.acaActive;
    }

    constructor(private route: ActivatedRoute,public _commentsService: CommentsService, 
                private _workshopsService: WorkshopsService, private _tagsService: TagsService,private cdr: ChangeDetectorRef,
                private store: Store<AppState>) {
        this.id = route.snapshot.params.id;
    }

    ngOnInit() {
        
        this.store.dispatch(new WorkshopRequested({id: this.id}));
        this.workshop$ = this.store.pipe(select(selectWorkshop)).subscribe(workshop => {
            this.workshop = workshop; this.cdr.detectChanges();
        });
        // this.route.data.subscribe(data => {
        //     this._commentsService.comments = data.workshops[2];
        //     if (data.workshops[0]) {
        //         this.workshop = data.workshops[0];
        // }
        // else{
        //     this.workshop = data.workshops;
        // };
        // });

        // this.tags$ = this.store.pipe(select(selectAllTags));
        // this.tags$.subscribe(tags => {
        //     this.workshop.tags.forEach(el => 
        //         this.tagsList.push(
        //             {tagTitle: tags.find(x => x.seq === el).name, isActive: false, seq: el }
        //         )
        //     );
        // });

    }

    ngOnDestroy(): void {
        this.workshop$.unsubscribe();
        this.store.dispatch(new WorkshopLoaded({workshop: null}));

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
