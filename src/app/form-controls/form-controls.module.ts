import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CheckboxComponent,  DropdownComponent, TextInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [TextInputComponent, DropdownComponent, CheckboxComponent]
})
export class FormControlsModule { }
