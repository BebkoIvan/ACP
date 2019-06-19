import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UnderConstructionComponent } from '../shared/under-construction/under-construction.component';
import { QuizzesFeedComponent } from './quizzes-feed/quizzes-feed.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { QuizConstructorComponent } from './quiz-constructor/quiz-constructor.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full'
    },
    {
        path:'feed',
        component:QuizzesFeedComponent,
        children: [

            {
                path: '',
                outlet: 'aside',
                component:QuizConstructorComponent
            }

        ]
    },
    
    {
        path: ':id',
        component: QuizPageComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizzesRoutingModule {}
