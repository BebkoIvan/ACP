import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-auxiliary-content",
    templateUrl: "./auxiliary-content.component.pug",
    styleUrls: ["./auxiliary-content.component.scss"],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuxiliaryContentComponent implements OnInit {
    constructor() {}

    @Input() auxContActive: boolean;

    @Output() acaClick = new EventEmitter();

    aca_handler(e: Event): void {
        this.acaClick.emit();
    }

    ngOnInit() {}
}
