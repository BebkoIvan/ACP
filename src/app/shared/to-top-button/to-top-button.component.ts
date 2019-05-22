import { Component, OnInit,HostListener,Output,EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';

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

 
  topPosToStartShowing:number = 150;
  @Input() scrollPosition:number;
  @Output()scrollTop = new EventEmitter();

  btnHandler(e:Event):void{
    this.scrollTop.emit();
  }

 
  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
