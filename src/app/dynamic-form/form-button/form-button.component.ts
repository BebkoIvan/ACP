import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.pug',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements Field {
  
  group: FormGroup;
  config: FieldConfig;

}
