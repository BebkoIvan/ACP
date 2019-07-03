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

  workshopForm: FormGroup;
  tagSelectionForm: FormGroup;
  allTagsNames;
  allTags;
  tagsSelected: Array<any> = [];
  tagsSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private cdr: ChangeDetectorRef,
              private ws: WorkshopsService) { }

  ngOnInit() {

    this.tagSelectionForm = this.formBuilder.group({
      tag: ['', Validators.required]
     });

    this.workshopForm = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      text: ['', Validators.required]

    });
    this.tagsSubscription = this.store.pipe(select(selectTags)).subscribe(tags => {
    if (!tags) {
      this.store.dispatch(new TagsRequested({}));
    } else {
      this.allTags = tags;
      this.allTagsNames = tags.map(el => el.name);
      this.cdr.detectChanges();
    }
  });
  }

  get f() { return this.workshopForm.controls; }

  addTag(e: Event) {
    e.preventDefault();
    const tagSelected = this.tagSelectionForm.value.tag;
    if (!this.tagsSelected.map(el => el.name).includes(tagSelected) && tagSelected) {
      this.tagsSelected.push(this.allTags.find(tag => tag.name === tagSelected ));
      this.tagSelectionForm.reset();
      this.cdr.detectChanges();

    }
  }

  removeTag(tag: any) {
    this.tagsSelected.splice(this.tagsSelected.indexOf(tag), 1);
  }

  
  createWorkshop(e: Event) {
    e.preventDefault();

    if (this.workshopForm.invalid) {
      return;
    }

    const workshopCreated = {
     title: this.f.title.value,
     description: this.f.description.value,
     text: this.f.text.value,
     tags: this.tagsSelected.map(el => el.seq)
    };
    this.store.dispatch(new AddWrokshop({workshop: workshopCreated}));
  }

  ngOnDestroy(): void {
    this.tagsSubscription.unsubscribe();
  }
}
