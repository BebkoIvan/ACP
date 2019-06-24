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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { AuthModule } from './auth/auth.module';






@NgModule({
    declarations: [AppComponent, DateAgoPipe],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, DynamicFormModule, BrowserAnimationsModule,AuthModule, CoreModule,
        SharedModule, StoreModule.forRoot(reducers, { metaReducers }), EffectsModule.forRoot([AppEffects])],
    providers: [ApiService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MyInterceptor,
          multi: true
        }, ],
    bootstrap: [AppComponent]
})
export class AppModule {}
