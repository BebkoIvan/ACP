import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
    selector: 'app-user-pic',
    templateUrl: './user-pic.component.pug',
    styleUrls: ['./user-pic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPicComponent implements OnInit {

    @Input() imgSrc: string;
    @Input() name: string;
    @Input() lastname: string;
    initials: string;

    constructor() {}

    ngOnInit() {
        this.initials = this.name.charAt(0) + this.lastname.charAt(0);
    }

}
