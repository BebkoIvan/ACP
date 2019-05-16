import { Component, OnInit, HostListener } from "@angular/core";

@Component({
    selector: "app-top-pane",
    templateUrl: "./top-pane.component.pug",
    styleUrls: ["./top-pane.component.scss"]
})
export class TopPaneComponent implements OnInit {
    constructor() {}
    search_active: Boolean = false;
    mobile: Boolean = false;
    innerWidth: any;
    menu_active: Boolean = false;
    profile: { user_name: string; get_img(): string } = {
        user_name: "Jeff Bezos",
        get_img() {
            return (
                "/assets/images/" +
                this.user_name.substr(0, this.user_name.indexOf(" ")) +
                ".png"
            );
        }
    };
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth >= 576) {
            this.mobile = false;
        } else {
            this.mobile = true;
        }
    }
    @HostListener("window:resize", ["$event"]) onResize(event) {
        if (
            (this.innerWidth < 576 && window.innerWidth >= 576) ||
            (this.innerWidth >= 576 && window.innerWidth < 576)
        ) {
            this.search_active = false;
            this.menu_active = false;
        }
        this.innerWidth = window.innerWidth;
        if (this.innerWidth >= 576) {
            this.mobile = false;
        } else {
            this.mobile = true;
        }
    }
    handleSearchClick(e: Event) {
        this.search_active = !this.search_active;
    }
    handleMenuClick(e: Event) {
        this.menu_active = !this.menu_active;
        let menu: HTMLElement = document.querySelector(".side-menu");
        if (this.menu_active) {
            menu.className += " menu-active";
        } else {
            menu.className = "side-menu";
        }
    }
}
