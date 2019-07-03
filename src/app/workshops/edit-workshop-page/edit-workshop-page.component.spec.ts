import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkshopPageComponent } from './edit-workshop-page.component';

describe('EditWorkshopPageComponent', () => {
  let component: EditWorkshopPageComponent;
  let fixture: ComponentFixture<EditWorkshopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkshopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkshopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
