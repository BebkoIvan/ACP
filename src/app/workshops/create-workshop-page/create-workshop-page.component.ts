import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { TagsRequested, AddWrokshop } from '../store/workshops.actions';
import { Subscription } from 'rxjs';
import { selectTags, selectAllArticles } from '../store/workshops.selectors';
import { WorkshopsService } from '../services/workshops.service';


@Component({
  selector: 'app-create-workshop-page',
  templateUrl: './create-workshop-page.component.pug',
  styleUrls: ['./create-workshop-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateWorkshopPageComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private cdr: ChangeDetectorRef,
              private ws: WorkshopsService) { }

  ngOnInit() {}

  createWorkshop(value) {
    this.store.dispatch(new AddWrokshop({workshop: value}));
  }

  ngOnDestroy(): void {
    // this.tagsSubscription.unsubscribe();
  }
}
