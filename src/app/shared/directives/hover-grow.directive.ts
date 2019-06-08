import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverGrow]'
})
export class HoverGrowDirective implements OnInit {

  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseover') onHover() {
    this.renderer2.setStyle(this.el.nativeElement, 'transform', 'scale(1.3)');
  }
  @HostListener('mouseout') onMouseOut() {
    this.renderer2.setStyle(this.el.nativeElement, 'transform', 'scale(1.0)');
  }

  ngOnInit() {
    this.renderer2.setStyle(this.el.nativeElement, 'transition', 'all 0.5s ease-out');
  }

}
