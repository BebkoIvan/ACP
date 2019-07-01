import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopPaneComponent } from './top-pane/top-pane.component';
import {SharedModule} from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { ConfirmPopupService } from './services/confirm-popup.service';

@NgModule({
  declarations: [SideMenuComponent, TopPaneComponent, ProfileComponent, ConfirmPopupComponent],
  imports: [
    CommonModule, SharedModule, OverlayModule , RouterModule, ReactiveFormsModule
  ],
  exports: [TopPaneComponent, ConfirmPopupComponent, SideMenuComponent],
  entryComponents: [ConfirmPopupComponent]
})
export class CoreModule { }
