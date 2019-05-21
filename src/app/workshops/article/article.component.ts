import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-article",
    templateUrl: "./article.component.pug",
    styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
    constructor() {}

    @Input() article: Article;
    likeactive: boolean = false;

    likec() {
        if (this.likeactive) {
            this.article.likes -= 1;
        } 
        else {
            this.article.likes += 1;
        }

        this.likeactive = !this.likeactive;
    }

    ngOnInit() {}
}
