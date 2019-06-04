import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCollapsable]'
})
export class CollapsableDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef ) { }



}
