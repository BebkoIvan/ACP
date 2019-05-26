import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorkshopsFeedComponent } from "./workshops-feed/workshops-feed.component";
import { WorkshopPageComponent } from './workshop-page/workshop-page.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const WorkShopsroutes: Routes = [
    {
        path: '',
        redirectTo: "feed",
        pathMatch: "full"
    },

    {
        path:"feed",
        component:WorkshopsFeedComponent,
        pathMatch: "full"
    },

    {
        path:":id",
        component:WorkshopPageComponent,
        pathMatch: "full"
    },

    { 
        path: '**',
        component: PageNotFoundComponent,
        pathMatch: "full"
        }

];

@NgModule({
    imports: [RouterModule.forChild(WorkShopsroutes)],
    exports: [RouterModule]
})
export class WorkshopsRoutingModule {}
