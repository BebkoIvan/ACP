import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectWorkshop } from '../store/workshops.selectors';
import { WorkshopRequested, UpdateWorkshop } from '../store/workshops.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-workshop-page',
  templateUrl: './edit-workshop-page.component.pug',
  styleUrls: ['./edit-workshop-page.component.scss']
})
export class EditWorkshopPageComponent implements OnInit {
  workshop$: Observable<any>;
  id: string;
  
  constructor(private route: ActivatedRoute, private store: Store<AppState>) { 
    this.id = route.snapshot.params.id;
  }

  ngOnInit() {
    this.workshop$ = this.store.pipe(select(selectWorkshop));
    this.store.dispatch(new WorkshopRequested({id: this.id}));
  }

  updateWorkshop(value) {
    this.store.dispatch(new UpdateWorkshop({postId: this.id, workshop: value}));
  }

}
