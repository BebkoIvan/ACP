import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    selector: "app-tag",
    templateUrl: "./tag.component.pug",
    styleUrls: ["./tag.component.scss"],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {

    constructor(private route:ActivatedRoute,private router: Router) {}

    @Input() tag:Tag;

    ngOnInit() {
    }
}
