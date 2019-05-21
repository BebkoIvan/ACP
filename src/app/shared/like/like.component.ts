import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-like",
    templateUrl: "./like.component.pug",
    styleUrls: ["./like.component.scss"]
})
export class LikeComponent implements OnInit {
    constructor() {}
    @Input() likeActive: boolean;
    @Output() likeClicked = new EventEmitter();

    changeState(e: Event): void {
        this.likeClicked.emit();
    }

    ngOnInit() {}
}
