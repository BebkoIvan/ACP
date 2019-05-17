import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.pug',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() tabLabel:string;
}
