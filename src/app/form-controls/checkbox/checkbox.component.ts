import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.pug',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }],
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() value :boolean;
  @Input() label: boolean;
  constructor() { }

  private propagateChange = (value: boolean) => {}
  private propagateTouched = (value: FocusEvent) => {}

  writeValue(value: boolean): void {
    this.value = value;
   }

registerOnChange(fn: any) {
    this.propagateChange = fn;
 }

registerOnTouched(fn: any) {
  this.propagateTouched = fn;
 }

 onChange(value: boolean): void {
  this.propagateChange(value);
 }


}
