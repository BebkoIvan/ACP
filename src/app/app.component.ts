import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.pug",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "ACP";
    menu_active: Boolean = false ;
    aca_active: Boolean = false;

    profile:User  = {
        name: "Jeff",
        lastname:"Bezos",
        imgSrc:"/assets/images/Jeff.png",
        link:""
    };

    articles = [
        {
            title: "TAG Heuer Gets 'Tagged",
            img: "/assets/images/tag_heuer.jpg",
            text:
                "TAG Heuer’s headquarters during Art Basel Miami 2016 was the Mondrian Hotel, where the company announced its new partnership with graffiti artist Alec Monopoly. The artist painted a huge mural on the side of the hotel, exhibited several works in the TAG Heuer lounge, and unveiled a new painting – a portrait of brand president Jean-Claude Biver."
        },
        {
            title: "Case is better",
            img: "/assets/images/case.jpg",
            text:
                "I spent maybe a week all day every day working on the wall, my first legal wall because I was just so excited and it was nice to be able to chill and relax and work on the piece instead of doing it quickly and running from the cops or whatever. Then it just really grew from there. Other people saw it and appreciated the skill."
        },
        {
            title: "Alec is priceless",
            img: "/assets/images/tag_heuer.jpg",
            text:
                "I did an art show for Donald Trump at his house in Palm Beach, Florida. It was a bunch of pop art and stuff like that, so I wasn't doing any graffiti at that time, so I'd say from about 2000 to 2006, I wasn't doing any graffiti."
        }
    ];
    ngOnInit() {
    }
    handleMenuClick() {
        this.menu_active = !this.menu_active;
    }

}
