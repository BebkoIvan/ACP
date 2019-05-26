import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkshopsFeedComponent } from "./workshops-feed/workshops-feed.component";
import { WorkshopPageComponent } from "./workshop-page/workshop-page.component";
import { ArticleComponent } from "./article/article.component";
import { SharedModule } from "../shared/shared.module";
import { WorkshopsRoutingModule } from './workshops-routing.module';
import { WorkshopsService } from './workshops.service';

@NgModule({
    declarations: [
        WorkshopsFeedComponent,
        WorkshopPageComponent,
        ArticleComponent
    ],
    imports: [CommonModule, SharedModule, WorkshopsRoutingModule],
    exports: [WorkshopsFeedComponent, ArticleComponent],
    providers:[WorkshopsService]
})
export class WorkshopsModule {}
