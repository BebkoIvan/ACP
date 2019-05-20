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

@NgModule({
  declarations: [TabComponent,TabGroupComponent, UserPicComponent, ViewportComponent, CardComponent, TagComponent, TimestampComponent, CommentCardComponent, ToTopButtonComponent, LikeComponent],
  imports: [
    CommonModule
  ],
  exports:[TabComponent,TabGroupComponent,LikeComponent,TimestampComponent,TagComponent, UserPicComponent, ViewportComponent,CardComponent,ToTopButtonComponent]
})
export class SharedModule { }
