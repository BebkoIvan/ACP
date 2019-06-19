import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesFeedComponent } from './quizzes-feed.component';

describe('QuizzesFeedComponent', () => {
  let component: QuizzesFeedComponent;
  let fixture: ComponentFixture<QuizzesFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzesFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
