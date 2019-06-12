import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginFormComponent } from './shared/login-form/login-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'workshops',
        pathMatch: 'full'
    },

    {
        path: 'workshops',
        loadChildren: './workshops/workshops.module#WorkshopsModule'
    },

    {
        path:'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },

    {
        path:'quizzes',
        loadChildren: './quizzes/quizzes.module#QuizzesModule'
    },

    {
        path: 'login',
        pathMatch: 'full',
        component: LoginFormComponent
    },

    {
    path: '**',
    component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
