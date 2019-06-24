import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent, SignUpFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
    // StoreModule.forFeature('auth',authReducer),
    // EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
