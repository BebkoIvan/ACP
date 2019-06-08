import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UnderConstructionComponent } from '../shared/under-construction/under-construction.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
    {
        path: "" ,
        component:ExampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
