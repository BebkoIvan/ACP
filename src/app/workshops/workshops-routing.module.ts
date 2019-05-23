import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorkshopsFeedComponent } from "./workshops-feed/workshops-feed.component";
import { WorkshopPageComponent } from './workshop-page/workshop-page.component';

const WorkShopsroutes: Routes = [
    {
        path: '',
        redirectTo: "feed",
        pathMatch: "full"
    },

    {
        path:"feed",
        component:WorkshopsFeedComponent
    },

    {
        path:":id",
        component:WorkshopPageComponent
    },



];

@NgModule({
    imports: [RouterModule.forChild(WorkShopsroutes)],
    exports: [RouterModule]
})
export class WorkshopsRoutingModule {}
