import { Component, OnInit, HostListener, Output, EventEmitter, ChangeDetectionStrategy, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.pug',
  styleUrls: ['./to-top-button.component.scss'],
})
export class ToTopButtonComponent implements OnInit {

  @Input() scrollElement: HTMLElement;
  scrollTop: number;
  topPosToStartShowing = 150;
  active = false;

  constructor(private _renderer2: Renderer2) {}
 
  ngOnInit() {
    this._renderer2.listen(this.scrollElement, 'scroll', () => {
      if (this.scrollElement.scrollTop > this.topPosToStartShowing) {
        this.active = true;
      }
      else {
        this.active = false;
      }
    } )
  }

  scroll(): void {
    this.scrollElement.scrollTo({
        behavior: 'smooth',
        top: 0
    })
  }

}
