import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopsFeedComponent } from './workshops-feed/workshops-feed.component';
import { WorkshopPageComponent } from './workshop-page/workshop-page.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AuthGuard } from '../guards/auth-guard.guard';
import { WorkshopResolverService } from './services/workshop-resolver.service';
import { AuxiliaryContentComponent } from '../shared/auxiliary-content/auxiliary-content.component';
import { CommentFormComponent } from '../shared/comment-form/comment-form.component';
import { WorkshopQuizzesComponent } from './workshop-quizzes/workshop-quizzes.component';
import { WorkshopCommentsComponent } from './workshop-comments/workshop-comments.component';
import { WorkshopResourcesComponent } from './workshop-resources/workshop-resources.component';
import { OneWorkshopResolverService } from './services/one-workshop-resolver.service';

const WorkShopsroutes: Routes = [
    {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full'
    },

    {
        path: 'feed',
        component: WorkshopsFeedComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
        resolve: {workshops: WorkshopResolverService},
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    },

    {
        path: ':id',
        component: WorkshopPageComponent,
        canActivate: [AuthGuard],
        resolve: {workshops: OneWorkshopResolverService},
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        children: [

            {
                path: '',
                outlet: 'aside',
                redirectTo: 'resources'
            },

            {
                path: 'comments',
                outlet: 'aside',
                component: WorkshopCommentsComponent
            },

            {
                path: 'resources',
                outlet: 'aside',
                component: WorkshopResourcesComponent
            },

            {
                path: 'quizzes',
                outlet: 'aside',
                component: WorkshopQuizzesComponent
            }
        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(WorkShopsroutes)],
    exports: [RouterModule],
    providers:[WorkshopResolverService]
})
export class WorkshopsRoutingModule {}
