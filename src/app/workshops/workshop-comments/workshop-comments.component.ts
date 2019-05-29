import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WorkshopsService } from "../services/workshops.service";

@Component({
    selector: "app-workshop-comments",
    templateUrl: "./workshop-comments.component.pug",
    styleUrls: ["./workshop-comments.component.scss"]
})
export class WorkshopCommentsComponent implements OnInit {
    id: number;
    comments: Array<Comment1>;

    constructor(
        private route: ActivatedRoute,
        private _workshopsService: WorkshopsService
    ) {
        this.id = route.snapshot.params["id"];
    }

    ngOnInit() {
        this.comments = this._workshopsService.getWorkShops(
            this.id
        )[0].comments;
        this.comments.sort(function(a, b) {
            let a1 = new Date(a.date);
            let b2 = new Date(b.date);
            return a1 > b2 ? -1 : a1 < b2 ? 1 : 0;
        });
    }
}
