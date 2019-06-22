import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.pug',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input()
  config: any[] = [];
  
  @Output() submitted = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
    this.form.valueChanges.subscribe(console.log);
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => {
      if (control.name) {
        group.addControl(control.name, this.fb.control({
          value: control.initialValue || '', disabled: control.disabled}
          )
          );
      }
    });
    return group;
  }

}
