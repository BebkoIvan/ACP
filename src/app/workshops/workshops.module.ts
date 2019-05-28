import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkshopsFeedComponent } from "./workshops-feed/workshops-feed.component";
import { WorkshopPageComponent } from "./workshop-page/workshop-page.component";
import { ArticleComponent } from "./article/article.component";
import { SharedModule } from "../shared/shared.module";
import { WorkshopsRoutingModule } from './workshops-routing.module';
import { WorkshopsService } from './services/workshops.service';
import { WorkshopResourcesComponent } from './workshop-resources/workshop-resources.component';
import { WorkshopCommentsComponent } from './workshop-comments/workshop-comments.component';
import { WorkshopQuizzesComponent } from './workshop-quizzes/workshop-quizzes.component';

@NgModule({
    declarations: [
        WorkshopsFeedComponent,
        WorkshopPageComponent,
        ArticleComponent,
        WorkshopResourcesComponent,
        WorkshopCommentsComponent,
        WorkshopQuizzesComponent
    ],
    imports: [CommonModule, SharedModule, WorkshopsRoutingModule],
    exports: [WorkshopsFeedComponent, ArticleComponent],
    providers:[WorkshopsService]
})
export class WorkshopsModule {}
