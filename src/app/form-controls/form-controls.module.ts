import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [CheckboxComponent, InputComponent, DropdownComponent],
  imports: [
    CommonModule
  ]
})
export class FormControlsModule { }
