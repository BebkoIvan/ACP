import { Directive, TemplateRef, ViewContainerRef, Input, HostBinding, Renderer2, OnInit, ElementRef, ViewChild } from '@angular/core';


@Directive({
  selector: '[appCollapsable]'
})
export class CollapsableDirective implements OnInit {
  @Input() appCollapsable: number;
  @ViewChild('fullText') container: ElementRef;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private renderer: Renderer2,private elRef:ElementRef ) { }
  
  moreOrLess() {
    console.log(this.appCollapsable);
  }

  ngOnInit(): void {

    this.viewContainer.createEmbeddedView(this.templateRef, {
      controller: {toggle: () => this.moreOrLess()}
    });
  }
}
