import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopPaneComponent } from './top-pane/top-pane.component';
import {SharedModule} from '../shared/shared.module';
import { Routes, RouterModule } from "@angular/router";
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SideMenuComponent,TopPaneComponent, SignUpFormComponent,LoginFormComponent],
  imports: [
    CommonModule,SharedModule,RouterModule,ReactiveFormsModule
  ],
  exports:[TopPaneComponent,SideMenuComponent]
})
export class CoreModule { }
