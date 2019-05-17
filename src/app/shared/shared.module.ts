import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { UserPicComponent } from './user-pic/user-pic.component';
import { ViewportComponent } from './viewport/viewport.component';

@NgModule({
  declarations: [TabComponent,TabGroupComponent, UserPicComponent, ViewportComponent],
  imports: [
    CommonModule
  ],
  exports:[TabComponent,TabGroupComponent, UserPicComponent, ViewportComponent]
})
export class SharedModule { }
