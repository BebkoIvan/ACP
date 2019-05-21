import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorkshopsFeedComponent } from "./workshops-feed/workshops-feed.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "feed",
        pathMatch: "full"
    },

    {
        path:"feed",
        component:WorkshopsFeedComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkshopsRoutingModule {}
