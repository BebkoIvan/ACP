import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopPaneComponent } from './top-pane/top-pane.component';
import {SharedModule} from '../shared/shared.module';
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [SideMenuComponent,TopPaneComponent,ProfileComponent],
  imports: [
    CommonModule, SharedModule, RouterModule, ReactiveFormsModule
  ],
  exports:[TopPaneComponent,SideMenuComponent]
})
export class CoreModule { }
