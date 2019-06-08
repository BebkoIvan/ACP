import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { UserPicComponent } from './user-pic/user-pic.component';
import { ViewportComponent } from './viewport/viewport.component';
import { CardComponent } from './card/card.component';
import { TagComponent } from './tag/tag.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { ToTopButtonComponent } from './to-top-button/to-top-button.component';
import { LikeComponent } from './like/like.component';
import { AuxiliaryContentComponent } from './auxiliary-content/auxiliary-content.component';
import { SharedRoutingModule } from './shared-routing.module';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TagCloudComponent } from './tag-cloud/tag-cloud.component';
import { CategoriesComponent } from './categories/categories.component';
import { TextToColorDirective } from './directives/text-to-color.directive';
import { QueryParamsActiveDirective } from './directives/query-params-active.directive';
import { CollapsableDirective } from './directives/collapsable.directive';
import { RangeDirective } from './directives/range.directive';
import { HoverGrowDirective } from './directives/hover-grow.directive';



@NgModule({
  declarations: [TabComponent, RangeDirective, TextToColorDirective,CollapsableDirective, QueryParamsActiveDirective, TabGroupComponent, UserPicComponent, ViewportComponent, CardComponent, TagComponent, TimestampComponent, CommentCardComponent, ToTopButtonComponent, LikeComponent, AuxiliaryContentComponent, UnderConstructionComponent, CommentFormComponent, PageNotFoundComponent, TagCloudComponent, CategoriesComponent, HoverGrowDirective],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [TabComponent, CategoriesComponent, RangeDirective, CollapsableDirective,TextToColorDirective, QueryParamsActiveDirective, CommentFormComponent, CommentCardComponent, UnderConstructionComponent, TabGroupComponent, AuxiliaryContentComponent, LikeComponent, TimestampComponent, TagComponent, UserPicComponent, ViewportComponent, CardComponent, ToTopButtonComponent, TagCloudComponent]
})
export class SharedModule { }
