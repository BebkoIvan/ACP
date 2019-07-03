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
import { OneWorkshopResolverService } from './services/one-workshop-resolver.service';
import { CreateWorkshopPageComponent } from './create-workshop-page/create-workshop-page.component';

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
    },

    {
        path: 'create',
        component: CreateWorkshopPageComponent,
        pathMatch: 'full'
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
                redirectTo: 'comments'
            },

            {
                path: 'comments',
                outlet: 'aside',
                component: WorkshopCommentsComponent
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
