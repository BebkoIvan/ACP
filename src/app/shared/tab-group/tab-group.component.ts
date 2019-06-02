import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.pug',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
      let activeTabs = this.tabs.filter(tab => tab.active);
  }

  selectTab(tab: TabComponent) {
      this.tabs.toArray().forEach(tab => (tab.active = false));
      tab.active = true;
  }
}
