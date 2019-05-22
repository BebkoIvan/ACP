import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-tag",
    templateUrl: "./tag.component.pug",
    styleUrls: ["./tag.component.scss"],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {
    constructor() {}

    tagActive: boolean=false;

    @Input() tagTitle: string;


    changeState(e: Event): void {
        this.tagActive = !this.tagActive;
    }

    ngOnInit() {}
}
