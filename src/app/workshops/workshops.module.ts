import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopsFeedComponent } from './workshops-feed/workshops-feed.component';
import { WorkshopPageComponent } from './workshop-page/workshop-page.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [WorkshopsFeedComponent, WorkshopPageComponent, ArticleComponent],
  imports: [
    CommonModule
  ],
  exports:[WorkshopsFeedComponent]
})
export class WorkshopsModule { }
