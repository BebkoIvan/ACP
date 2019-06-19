import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';

const components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
};
@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() config: any;
  @Input() group: FormGroup;
  
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  component;

  ngOnInit() {
    const component = this.resolver.resolveComponentFactory<any>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
 
  }
}
