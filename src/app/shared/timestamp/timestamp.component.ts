import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-timestamp',
    templateUrl: './timestamp.component.pug',
    styleUrls: ['./timestamp.component.scss'],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class TimestampComponent implements OnInit {
    @Input() date: string;
    @Input() format: string;

    constructor() {}

    ngOnInit() { }
}
