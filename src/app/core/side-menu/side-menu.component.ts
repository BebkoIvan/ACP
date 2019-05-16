import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.pug',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menu_items = [
    {
        title: "Dashboard",
        icon: "icon-dashboard"
    },
    {
        title: "Lessons",
        icon: "icon-study"
    },
    {
        title: "Settings",
        icon: "icon-cog"
    }
];
}
