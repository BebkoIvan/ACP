import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.pug',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
    @Input() menuActive: boolean;
    @Output() menuClick = new EventEmitter();
    menuItems: MenuData[] = [
        {
            label: 'Dashboard',
            icon: 'icon-dashboard',
            link: '/dashboard'
        },
        {
            label: 'Workshops',
            icon: 'icon-study',
            link: '/workshops'
        },
        {
            label: 'Quizzes',
            icon: 'icon-question_answer',
            link: '/quizzes'
        }
    ];

    constructor() {}

    ngOnInit() {}
    hideMenu(e: Event): void {
        this.menuClick.emit();
    }
}
