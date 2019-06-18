import { Component, OnInit, forwardRef, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.pug',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInputComponent),
    multi: true
  }],
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements ControlValueAccessor {
  value: string;
  disabled = false;
  @Input() type = 'text';
  @Input() label = '';
  @Input() placeHolder = 'Type here..';
  @Input() inputId = '';
  @Input() maxLength = 255;
  
  @ViewChild('input') input: ElementRef;

  constructor(private _renderer: Renderer2) { }

  private propagateChange = (value: string) => {}
  private propagateTouched = (value: FocusEvent) => {}

  writeValue(value: string) : void {
    this.value = value;
   }

registerOnChange(fn: any) {
    this.propagateChange = fn;
 }

registerOnTouched(fn: any) {
  this.propagateTouched = fn;
 }

 setDisabledState(isDisabled: boolean): void {
  this.disabled = isDisabled;
  this._renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
 }

 onChange(value: string): void {
  this.propagateChange(value);
 }

 onBlur($event) {
   this.propagateTouched($event);
 }

  ngOnInit() {
  }

}
