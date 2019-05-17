import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-side-menu",
    templateUrl: "./side-menu.component.pug",
    styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    @Input() menu_active: boolean;
    @Output() menu_click = new EventEmitter();

    hide_menu(e: Event): void {
        let element = event.target as HTMLElement;
        console.log(element.className);
        if (element.className == "side-menu menu-active") {
            
            this.menu_click.emit();
        }
    }
    menuItems:MenuData[] = [
        {
            label: "Dashboard",
            icon: "icon-dashboard",
            link:""
        },
        {
            label: "Lessons",
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
