import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorkshopsFeedComponent } from "./workshops-feed/workshops-feed.component";
import { WorkshopPageComponent } from './workshop-page/workshop-page.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { WorkshopResolverService } from './services/workshop-resolver.service';
import { AuxiliaryContentComponent } from '../shared/auxiliary-content/auxiliary-content.component';
import { CommentFormComponent } from '../shared/comment-form/comment-form.component';

const WorkShopsroutes: Routes = [
    {
        path: '',
        redirectTo: "feed",
        pathMatch: "full"
    },

    {
        path:"feed",
        component:WorkshopsFeedComponent,
        pathMatch: "full",
        canActivate:[AuthGuardGuard],
        resolve:{workshops:WorkshopResolverService},
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
    },

    {
        path:":id",
        component:WorkshopPageComponent,
        canActivate:[AuthGuardGuard],
    }


];

@NgModule({
    imports: [RouterModule.forChild(WorkShopsroutes)],
    exports: [RouterModule],
    providers:[WorkshopResolverService]
})
export class WorkshopsRoutingModule {}
