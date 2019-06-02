import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopPaneComponent } from './top-pane/top-pane.component';
import {SharedModule} from '../shared/shared.module';
import { Routes, RouterModule } from "@angular/router";

@NgModule({
  declarations: [SideMenuComponent,TopPaneComponent],
  imports: [
    CommonModule,SharedModule,RouterModule
  ],
  exports:[TopPaneComponent,SideMenuComponent]
})
export class CoreModule { }
