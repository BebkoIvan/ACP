import { Component, OnInit,  Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.pug',
    styleUrls: ['./tag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {

    constructor() {}

    @Input() tag;
    
    ngOnInit() {}
}
