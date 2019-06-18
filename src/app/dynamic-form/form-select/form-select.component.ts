import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.pug',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  group: FormGroup;
  config: any;
  constructor() { }

  ngOnInit() {
  }

}
