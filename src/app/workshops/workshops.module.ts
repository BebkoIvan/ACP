import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkshopsFeedComponent } from "./workshops-feed/workshops-feed.component";
import { WorkshopPageComponent } from "./workshop-page/workshop-page.component";
import { ArticleComponent } from "./article/article.component";
import { SharedModule } from "../shared/shared.module";
import { WorkshopsRoutingModule } from './workshops-routing.module';
import { WorkshopsService } from './services/workshops.service';
import { WorkshopCommentsComponent } from './workshop-comments/workshop-comments.component';
import { WorkshopQuizzesComponent } from './workshop-quizzes/workshop-quizzes.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { workshopsReducer } from './store/workshops.reducer';
import { WorkshopsEffects } from './store/workshops.effects';
import { CreateWorkshopPageComponent } from './create-workshop-page/create-workshop-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlsModule } from '../form-controls/form-controls.module';
import { QuizzesEffects } from '../quizzes/store/quizzes.effects';




@NgModule({
    declarations: [
        WorkshopsFeedComponent,
        WorkshopPageComponent,
        ArticleComponent,
        WorkshopCommentsComponent,
        WorkshopQuizzesComponent,
        CreateWorkshopPageComponent,
    ],
    imports: [CommonModule, SharedModule, ReactiveFormsModule, FormControlsModule,
        StoreModule.forFeature('workshops', workshopsReducer),
        EffectsModule.forFeature([WorkshopsEffects, QuizzesEffects]),
     WorkshopsRoutingModule],
    exports: [WorkshopsFeedComponent, ArticleComponent],
    providers: [WorkshopsService]
})
export class WorkshopsModule {}
