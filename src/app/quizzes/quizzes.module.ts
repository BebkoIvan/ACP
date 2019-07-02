import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesFeedComponent } from './quizzes-feed/quizzes-feed.component';
import { FormControlsModule } from '../form-controls/form-controls.module';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { QuizConstructorComponent } from './quiz-constructor/quiz-constructor.component';
import { ConfigPipe } from '../pipes/config.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { quizzesReducer } from './store/quizzes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { QuizzesEffects } from './store/quizzes.effects';
import { QuizCardComponent } from './quizz-card/quizz-card.component';
import { ConfirmPopupService } from '../core/services/confirm-popup.service';


@NgModule({
  declarations: [ConfigPipe, QuizzesFeedComponent, QuizPageComponent, QuizConstructorComponent, QuizCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuizzesRoutingModule, SharedModule, FormControlsModule, DynamicFormModule,
    StoreModule.forFeature('quizzes', quizzesReducer),
    EffectsModule.forFeature([QuizzesEffects]),
  ]
})
export class QuizzesModule { }
