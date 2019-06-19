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
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';


@NgModule({
  declarations: [ConfigPipe, QuizzesFeedComponent, QuizPageComponent, QuizConstructorComponent, QuizQuestionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuizzesRoutingModule, SharedModule, FormControlsModule, DynamicFormModule
  ]
})
export class QuizzesModule { }
