import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter, Input } from '@angular/core';
import { AddWrokshop, TagsRequested, TagsLoaded } from '../store/workshops.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';
import { selectTags } from '../store/workshops.selectors';

@Component({
  selector: 'app-workshop-form',
  templateUrl: './workshop-form.component.pug',
  styleUrls: ['./workshop-form.component.scss']
})
export class WorkshopFormComponent implements OnInit {

  workshopForm: FormGroup;
  tagSelectionForm: FormGroup;
  allTagsNames;
  allTags;
  tagsSelected: Array<any> = [];
  tagsSubscription: Subscription;
  id: string;
  @Output() submitted = new EventEmitter();
  @Input() workshop;
  
  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>,
              private route: ActivatedRoute,
              private router: Router,
              private cdr: ChangeDetectorRef,
              private ws: WorkshopsService) {
                this.id = route.snapshot.params.id;
               }

  ngOnInit() {

    this.tagSelectionForm = this.formBuilder.group({
      tag: ['', Validators.required]
     });

    if (!this.workshop) {
      this.workshopForm = this.formBuilder.group({
        title: ['', Validators.required],
        image: ['', Validators.required],
        description: ['', Validators.required],
        text: ['', Validators.required]
      });
    }

    else {
      this.workshopForm = this.formBuilder.group({
        title: [this.workshop.title, Validators.required],
        image: [this.workshop.image, Validators.required],
        description: [this.workshop.description, Validators.required],
        text: [this.workshop.text, Validators.required]
      });
    }
   
    this.tagsSubscription = this.store.pipe(select(selectTags)).subscribe(tags => {
      if (!tags) {
        this.store.dispatch(new TagsRequested({}));
      }
      else{
        this.allTags = tags;
        this.allTagsNames = tags.map(el => el.name);
        this.workshop.tags.forEach(el => {
          this.tagsSelected.push(this.allTags.find(tag => tag.seq === el ));
      });
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

  
  onSubmit(e: Event) {
    e.preventDefault();

    if (this.workshopForm.invalid) {
      return;
    }

    const workshopCreated = {
     title: this.f.title.value,
     description: this.f.description.value,
     image: this.f.image.value,
     text: this.f.text.value,
     tags: this.tagsSelected.map(el => el.seq)
    };

    this.submitted.emit(workshopCreated);
    // this.store.dispatch(new AddWrokshop({workshop: workshopCreated}));
  }

  ngOnDestroy(): void {
    this.tagsSubscription.unsubscribe();
    // this.store.dispatch(new TagsLoaded({tags:[]}));
  }

}
