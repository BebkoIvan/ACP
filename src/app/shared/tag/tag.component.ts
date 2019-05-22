import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-tag",
    templateUrl: "./tag.component.pug",
    styleUrls: ["./tag.component.scss"],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {
    constructor() {}

    @Input() tagActive: boolean;
    @Input() tagTitle: string;

    // @Output() tagClicked = new EventEmitter();

    changeState(e: Event): void {
        this.tagActive = !this.tagActive;
    }

    ngOnInit() {}
}
