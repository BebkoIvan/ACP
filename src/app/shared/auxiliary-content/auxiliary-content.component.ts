import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-auxiliary-content',
    templateUrl: './auxiliary-content.component.pug',
    styleUrls: ['./auxiliary-content.component.scss'],
})
export class AuxiliaryContentComponent implements OnInit {
    constructor() {}

    @Input() auxContActive: boolean;

    @Output() acaClick = new EventEmitter();

    acaHandler(e: Event): void {
        this.acaClick.emit();
    }

    ngOnInit() {}
}
