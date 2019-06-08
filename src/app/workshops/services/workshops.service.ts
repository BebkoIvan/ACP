import { Injectable } from '@angular/core';
import { Workshops } from '../workshops-data/workshops';
import { UserInfoService } from 'src/app/services/user-info.service';

@Injectable({
    providedIn: 'root'
})
export class WorkshopsService {
    constructor(private user: UserInfoService) {}

    workshops: Workshop[] = Workshops;

    getWorkShops(): Workshop[] {
            return this.workshops;
    }

    getOneWorkShop(id: any) {
        return this.workshops.filter((elem: Workshop) => {
            return elem.id.toString() === id;
        })[0];
    }

    filtered(category: string, tag: string) {
        let filteredWorkshops: Workshop[] = this.workshops;
        if (category) {
            if (category === 'All') {
                filteredWorkshops = this.workshops;
            }
            else if (category === 'My Workshops') {
                filteredWorkshops = this.workshops.filter((elem: Workshop) => {
                    return this.user.profile.myWorkshops.includes(elem.id);
                });
            }
            else if (category === 'Favorite') {
                filteredWorkshops = this.workshops.filter((elem: Workshop) => {
                    return this.user.profile.favoriteWorkshops.includes(
                        elem.id
                    );
                });
            }
        }

        if (tag) {
            if (tag.indexOf(',') > -1) {
                let tagsList: string[] = tag.split(',');

                filteredWorkshops = filteredWorkshops.filter(
                    (elem: Workshop) => {
                        return tagsList.some(tag =>
                            elem.tagsList.includes(tag)
                        );
                    }
                );
            } 
            else {
                filteredWorkshops = filteredWorkshops.filter(
                    (elem: Workshop) => {
                        return elem.tagsList.includes(tag);
                    }
                );
            }
        }

        return filteredWorkshops;
    }
}
