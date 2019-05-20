import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.pug',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuItems:MenuData[] = [
    {
        label: "Dashboard",
        icon: "icon-dashboard",
        link:""
    },
    {
        label: "Workshops",
        icon: "icon-study",
        link:""
    },
    {
        label: "Settings",
        icon: "icon-cog",
        link:""
    }
];

}
