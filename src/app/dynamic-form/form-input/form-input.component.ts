import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.pug',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements Field {

  group: FormGroup;
  config: FieldConfig;
  
  constructor() { }

  ngOnInit() {

  }

}
