import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.pug',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  group: FormGroup;
  config: any;
  
  constructor() { }

  ngOnInit() {
  }

}
