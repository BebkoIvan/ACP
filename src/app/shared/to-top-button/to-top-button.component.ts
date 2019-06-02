import { Component, OnInit, HostListener, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.pug',
  styleUrls: ['./to-top-button.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ToTopButtonComponent implements OnInit {

  constructor() {}
 
  ngOnInit() {
  }


}
