import { Component, OnInit, Input, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.pug',
  styleUrls: ['./to-top-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToTopButtonComponent implements OnInit {

  @Input() scrollElement: HTMLElement;
  scrollTop: number;
  topPosToStartShowing = 150;
  active = false;

  constructor(private _renderer2: Renderer2, private cdr: ChangeDetectorRef) {}
 
  ngOnInit() {

    this._renderer2.listen(this.scrollElement, 'scroll', () => {
      if (this.scrollElement.scrollTop > this.topPosToStartShowing) {
        this.active = true;
      }
      else {
        this.active = false;
      }
      this.cdr.detectChanges();
    } )
  }

  scroll(): void {
    this.scrollElement.scrollTo({
        behavior: 'smooth',
        top: 0
    })
  }

}
