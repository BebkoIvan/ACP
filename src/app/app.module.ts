import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import { DateAgoPipe } from './pipes/date-ago.pipe';





@NgModule({
    declarations: [AppComponent, DateAgoPipe],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
