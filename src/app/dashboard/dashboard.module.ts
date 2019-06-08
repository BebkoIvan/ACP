import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, SharedModule
  ]
})
export class DashboardModule { }
