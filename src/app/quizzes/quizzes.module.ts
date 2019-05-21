import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { QuizzesRoutingModule } from './quizzes-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuizzesRoutingModule,SharedModule
  ]
})
export class QuizzesModule { }
