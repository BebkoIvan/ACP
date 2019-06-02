import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }

  profile: User = {
    name: 'Jeff',
    lastname: 'Bezos',
    imgSrc: '/assets/images/Jeff.png',
    link: '',
    myWorkshops: [1, 3],
    favoriteWorkshops: [2, 4]
};

}
