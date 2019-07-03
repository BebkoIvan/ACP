import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkshopPageComponent } from './create-workshop-page.component';

describe('CreateWorkshopPageComponent', () => {
  let component: CreateWorkshopPageComponent;
  let fixture: ComponentFixture<CreateWorkshopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkshopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkshopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
