import { Component, OnInit,Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.pug',
  styleUrls: ['./tab.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title = '';
  @Input() active = false;
  @Input() disabled = false;
  
}
