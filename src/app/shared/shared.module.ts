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

@NgModule({
  declarations: [TabComponent,TabGroupComponent, UserPicComponent, ViewportComponent, CardComponent, TagComponent, TimestampComponent, CommentCardComponent, ToTopButtonComponent, LikeComponent, AuxiliaryContentComponent, UnderConstructionComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[TabComponent,CommentCardComponent,UnderConstructionComponent,TabGroupComponent,AuxiliaryContentComponent,LikeComponent,TimestampComponent,TagComponent, UserPicComponent, ViewportComponent,CardComponent,ToTopButtonComponent]
})
export class SharedModule { }
