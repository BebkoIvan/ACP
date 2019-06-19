import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.pug',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements Field {
  group: FormGroup;
  config: FieldConfig;

}
