import { Component, OnInit, forwardRef, ViewChild, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, DefaultValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.pug',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DefaultValueAccessor),
    multi: true
  }],
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements ControlValueAccessor {

  value: string;
  disabled = false;
  @Input() placeHolder = 'Select ...';
  @Input() inputId = '';
  @Input() options: Array<any>;
  private propagateChange = (value: string) => {}
  private propagateTouched = (value: FocusEvent) => {}

ngOnInit() {}



writeValue(value) { 
  this.value = value;
}

registerOnChange(fn) {  
  this.propagateChange = fn;
 }

registerOnTouched(fn) { 
  this.propagateTouched = fn;
 }

 
 onChange(value: string): void {
  this.propagateChange(value);
 }

}
