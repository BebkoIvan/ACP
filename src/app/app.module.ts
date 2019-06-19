import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './interceptors/auth.interceptor';
import { ApiService } from './shared/services/api-service/api.service';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { FormControlsModule } from './form-controls/form-controls.module';
import { ConfigPipe } from './pipes/config.pipe';






@NgModule({
    declarations: [AppComponent, DateAgoPipe],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, DynamicFormModule, BrowserAnimationsModule, CoreModule,  SharedModule],
    providers: [ApiService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MyInterceptor,
          multi: true
        }, ],
    bootstrap: [AppComponent]
})
export class AppModule {}
