import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { QueryParamsActiveDirective } from './directives/query-params-active.directive';



@NgModule({
    declarations: [AppComponent, DateAgoPipe],
    imports: [BrowserModule, AppRoutingModule,CoreModule,SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
