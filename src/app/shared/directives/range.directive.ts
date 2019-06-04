import { Directive, TemplateRef, ViewContainerRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appRange]'
})
export class RangeDirective implements OnChanges {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef ) { }

  @Input() appRangeOf: Array<any>;
  @Input() appRangeRange: Array<number> | number;


  ngOnChanges() {
    this.viewContainer.clear();

    const elements = this.appRangeOf;
    const range = typeof this.appRangeRange === 'number' ? [0, this.appRangeRange] : [this.appRangeRange[0], this.appRangeRange[1]];

    for (let k: number = range[0]; k < range[1]; k++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: elements[k],
        index: this.appRangeOf.indexOf(elements[k])
      });
    }
  }

}
