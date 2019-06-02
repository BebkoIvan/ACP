import { Component, OnInit,Input,HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
@Component({
    selector: 'app-workshops-feed',
    templateUrl: './workshops-feed.component.pug',
    styleUrls: ['./workshops-feed.component.scss'],
})
export class WorkshopsFeedComponent implements OnInit {

    scrollTop: number;
    topPosToStartShowing = 150;
    workshops: Workshop[];
    categories: string[] = ['All', 'My Workshops', 'Favorite'];
    user: User;
    tagsList: Array<Tag> = [
        {
         tagTitle: 'JavaScript',
         isActive: false 

        },

        {
            tagTitle: 'Social',
            isActive: false 
   
           },

        {
            tagTitle: 'NodeJs',
            isActive: false
        },

        {
            tagTitle: 'OOP',
            isActive: false
        },

        {
            tagTitle: 'Angular',
            isActive: false
        },

        {
            tagTitle: 'React',
            isActive: false
        },

        {
            tagTitle: 'Vue',
            isActive: false
        },

        {
            tagTitle: 'C++',
            isActive: false
        },

        {
            tagTitle: 'Java',
            isActive: false
        },

        {
            tagTitle: 'REST API',
            isActive: false
        },
        {
            tagTitle: 'Pascal',
            isActive: false
        },
        {
            tagTitle: 'Scala',
            isActive: false
        }
    ];

    constructor(private route: ActivatedRoute,private _user: UserInfoService, private router: Router) {
        if (!route.snapshot.params.category) {
            this.router.navigate([''], {
                queryParams: {  category: 'All' },
                queryParamsHandling: 'merge'
            });

        }
    }


    ngOnInit() {
        this.route.data.subscribe(data => this.workshops=data.workshops);
        this.user = this._user.profile;
    }

    @HostListener('scroll', ['$event'])onScroll($event: Event): void {
            this.scrollTop = $event.srcElement.scrollTop;
    };

    scroll(): void {
        let el = document.getElementById('topel');
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
      }

}
