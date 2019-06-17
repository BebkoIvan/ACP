import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginFormComponent } from './core/login-form/login-form.component';
import { SignUpFormComponent } from './core/sign-up-form/sign-up-form.component';
import { ProfileComponent } from './core/profile/profile.component';

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
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },

    {
        path: 'quizzes',
        loadChildren: './quizzes/quizzes.module#QuizzesModule'
    },

    {
        path: 'login',
        pathMatch: 'full',
        component: LoginFormComponent
    },

    {
        path: 'profile',
        pathMatch: 'full',
        component: ProfileComponent
    },


    {
        path: 'sign-up',
        pathMatch: 'full',
        component: SignUpFormComponent
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
