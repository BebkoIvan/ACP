import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlsModule } from '../form-controls/form-controls.module';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';

@NgModule({
  declarations: [FormInputComponent, FormSelectComponent, FormButtonComponent, DynamicFormComponent, DynamicFieldDirective],
  imports: [
    CommonModule, ReactiveFormsModule, FormControlsModule
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
  ]
})
export class DynamicFormModule { }
