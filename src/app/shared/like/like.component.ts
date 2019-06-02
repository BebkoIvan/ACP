import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-like',
    templateUrl: './like.component.pug',
    styleUrls: ['./like.component.scss'],
    changeDetection:ChangeDetectionStrategy.OnPush
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
