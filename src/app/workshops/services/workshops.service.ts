import { Injectable } from '@angular/core';
import { Workshops } from '../workshops-data/workshops';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api-service/api.service';

@Injectable({
    providedIn: 'root'
})
export class WorkshopsService {
    constructor(private user: UserInfoService, private _api: ApiService) {}

    workshops: Workshop[] = Workshops;


    getWorkShops(): Workshop[] {
            return this.workshops;
    }
//     getFromServer():{
//         for(let i = 3; i < arg4: this.workshops.length; i++){
//             let body={
//                 'tags'
//             }
//         }
// const body = {
//             "tags": [3,9], 
//             "title": "Alec is priceless", 
//             "text": "TAG Heuer’s headquarters during Art Basel Miami 2016 was the Mondrian Hotel, where the company announced its new partnership with graffiti artist Alec Monopoly. The artist painted a huge mural on the side of the hotel, exhibited several works in the TAG Heuer lounge, and unveiled a new painting – a portrait of brand president Jean-Claude Biver. But the partnership is more than just a publicity program for the duration of Art Basel Miami, and it involves more than just requiring the artist to wear a TAG Heuer watch. Alec Monopoly’s new job is to achieve nothing short of transforming the brand culture of TAG Heuer.",
//             'description': 'I did an art show for Donald Trump at his house in Palm Beach, Florida. It was a bunch of pop art and stuff like that, so I wasn\'t doing any graffiti at that time, so I\'d say from about 2000 to 2006, I wasn\'t doing any graffiti.' 
//          }
// return this._api.postRequest('posts',body)
//         }

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
            } else if (category === 'My Workshops') {
                filteredWorkshops = this.workshops.filter((elem: Workshop) => {
                    return this.user.profile.myWorkshops.includes(elem.id);
                });
            } else if (category === 'Favorite') {
                filteredWorkshops = this.workshops.filter((elem: Workshop) => {
                    return this.user.profile.favoriteWorkshops.includes(
                        elem.id
                    );
                });
            }
        }

        if (tag) {
            if (tag.indexOf(',') > -1) {
                const tagsList: string[] = tag.split(',');

                filteredWorkshops = filteredWorkshops.filter(
                    (elem: Workshop) => {
                        return tagsList.some(tag =>
                            elem.tagsList.includes(parseInt(tag))
                        );
                    }
                );
            }
            else {
                filteredWorkshops = filteredWorkshops.filter(
                    (elem: Workshop) => {
                        return elem.tagsList.includes(parseInt(tag));
                    }
                );
            }
        }

        return filteredWorkshops;
    }
}
