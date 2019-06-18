import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.pug',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {
  group: FormGroup;
  config: any;
  
  constructor() { }

  ngOnInit() {
  }

}
