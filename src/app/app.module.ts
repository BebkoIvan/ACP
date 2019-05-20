import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {WorkshopsModule} from "./workshops/workshops.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule,CoreModule,SharedModule,WorkshopsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
