import { Directive, TemplateRef, ViewContainerRef, Input, Renderer2, OnInit, ElementRef } from '@angular/core';
import { AnimationBuilder, AnimationFactory, style, animate, AnimationPlayer } from '@angular/animations';

@Directive({
  selector: '[appCollapsable]'
})
export class CollapsableDirective implements OnInit {
  element: HTMLElement;
  collapsed: boolean;
  collapseAnimation: AnimationFactory;
  expandAnimation: AnimationFactory;
  player: AnimationPlayer;
  context = {
    title: '',
    control: () => this.moreOrLess()
};
  @Input() appCollapsable: number;
  @Input('appCollapsableButton') button: TemplateRef<any>;
  @Input('appCollapsableTurnedOn') turnedOn: boolean;
  @Input('appCollapsableDefState') defState: 'collapsed'|'expanded';
  @Input('appCollapsableAnimationOn') animationOn: boolean;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,
              private renderer: Renderer2, private elRef: ElementRef, private builder: AnimationBuilder ) { }

  setCollapsed() {
    this.collapsed = this.defState === 'collapsed' ? true : false;
  }

  moreOrLess() {
    if (this.animationOn) {
      this.withAnimation();
    } else {
      this.noAnimation();
    }
    this.collapsed = !this.collapsed;
    this.context.title = !this.collapsed ? 'Show less' : 'Show more';
  }

  noAnimation(): void {
    if (this.collapsed) {
      this.renderer.setStyle(this.element, 'height', `${this.appCollapsable}px`);
    } else {
      this.renderer.removeStyle(this.element, 'height');
    }
  }

  withAnimation(): void {
    this.renderer.removeStyle(this.element, 'height');
    if (this.player) {
      this.player.destroy();
  }
    if (this.collapsed) {
      this.player = this.expandAnimation.create(this.element);
      this.player.play();
    } else {
      this.player = this.collapseAnimation.create(this.element);
      this.player.play();
    }
  }

  ngOnInit(): void {
    this.setCollapsed();
    this.context.title = this.defState === 'collapsed' ? 'Show more' : 'Show less';
    const componentView = this.viewContainer.createEmbeddedView(this.templateRef);
    this.collapseAnimation = this.builder.build([
      style({
          height: '*'
      }),
      animate(
          '300ms ease-in',
          style({
              height: this.appCollapsable
          })
      )
  ]);

    this.expandAnimation = this.builder.build([
      style({
          height: this.appCollapsable
      }),
      animate(
          '300ms ease-out',
          style({
              height: '*'
          })
      )
  ]);


    if (this.turnedOn) {
      this.viewContainer.createEmbeddedView(this.button, this.context);
      this.element = componentView.rootNodes[0];
      this.renderer.setStyle(this.element, 'overflow', 'hidden');
      if (this.defState === 'collapsed') {
        this.renderer.setStyle(this.element, 'height', `${this.appCollapsable}px`);
      }

    }
  }

}
