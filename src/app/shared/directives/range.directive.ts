import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appRange]'
})
export class RangeDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef ) { }

  @Input() set while(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
}
}
