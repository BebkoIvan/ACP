import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthService } from './services/user-auth.service';
import { MyInterceptor } from './interceptors/auth.interceptor';
import { ApiService } from './shared/services/api-service/api.service';






@NgModule({
    declarations: [AppComponent, DateAgoPipe],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, SharedModule],
    providers: [ApiService,
        {
          provide: HTTP_INTERCEPTORS,
          // Этим interceptor`ом будем добавлять auth header
          useClass: MyInterceptor,
          multi: true
        }, ],
    bootstrap: [AppComponent]
})
export class AppModule {}
