import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-side-menu",
    templateUrl: "./side-menu.component.pug",
    styleUrls: ["./side-menu.component.scss"],
})
export class SideMenuComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    @Input() menuActive: boolean;
    @Output() menuClick = new EventEmitter();

    hideMenu(e: Event): void {
        this.menuClick.emit();
    }

    menuItems:MenuData[] = [
        {
            label: "Dashboard",
            icon: "icon-dashboard",
            link:"/dashboard"
        },
        {
            label: "Workshops",
            icon: "icon-study",
            link:"/workshops/feed"
        },
        {
            label: "Quizzes",
            icon: "icon-question_answer",
            link:"/quizzes"
        }
    ];
}
