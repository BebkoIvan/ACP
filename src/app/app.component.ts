import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.pug",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "ACP";
    menu_active: Boolean = false;
    aca_active: Boolean = false;

    profile: User = {
        name: "Jeff",
        lastname: "Bezos",
        imgSrc: "/assets/images/Jeff.png",
        link: "",
        myWorkshops:[1,3],
        favoriteWorkshops:[2,4]
    };

    ngOnInit() {}
    handleMenuClick() {
        this.menu_active = !this.menu_active;
    }

}
