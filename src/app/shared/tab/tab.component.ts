import { Component, OnInit,Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.pug',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {

  constructor() { }

  @Input() title:string;
  @Input() link:string;
  @Input() active:boolean=false;


  ngOnInit() {
  }



  
}
