import { Injectable } from '@angular/core';
import { Workshops } from '../workshops-data/workshops';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { HttpParams } from '@angular/common/http';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Injectable({
    providedIn: 'root'
})
export class WorkshopsService {
    constructor(private _userService: UserAuthService, private _api: ApiService) {}

    allWorkshops: [];
    totalPosts;

   

    getPosts (category?, tags?: string): Observable<any> {
        let   params = {
            page: '',
            authorId: '',
            tags: ''
        } ;
        if (!category) {
            params.page = '1';
        }
        
        if (category) {
            params.page = '1';
            params.authorId = `${localStorage.getItem('id')}`;
        }

        if (tags) {
            params.tags = tags.split(',').join('|');
        }
        return this._api.getRequest(`posts`, null, params);

    }

    updatePost(id, body) {
        return this._api.putRequest(`posts/${id}`, body);
    }

    deletePost(id){
        return this._api.deleteRequest(`posts/${id}`);
    }

    getPostById(id) {
        return this._api.getRequest(`posts/${id}`);
    }

    setPosts() {
        this.getPosts().subscribe(data => {this.allWorkshops = data.posts; this.totalPosts = data.total; });
    }

    // newUser(){
    //     let body={
    //         'username':'ivanTest',
    //         'password':'12345'
    //     }
    //     return this._api.postRequest('users', body);
    // }
// getOneWorkShop(id: any) {
//         return this.workshops.filter((elem: Workshop) => {
//             return elem.id.toString() === id;
//         })[0];
//     }



// filtered(category: string, tag: string) {
//         let filteredWorkshops: Workshop[] = this.workshops;
//         if (category) {
//             if (category === 'All') {
//                 filteredWorkshops = this.workshops;
//             } else if (category === 'My Workshops') {
//                 filteredWorkshops = this.workshops.filter((elem: Workshop) => {
//                     return this.user.profile.myWorkshops.includes(elem.id);
//                 });
//             } else if (category === 'Favorite') {
//                 filteredWorkshops = this.workshops.filter((elem: Workshop) => {
//                     return this.user.profile.favoriteWorkshops.includes(
//                         elem.id
//                     );
//                 });
//             }
//         }

//         if (tag) {
//             if (tag.indexOf(',') > -1) {
//                 const tagsList: string[] = tag.split(',');

//                 filteredWorkshops = filteredWorkshops.filter(
//                     (elem: Workshop) => {
//                         return tagsList.some(tag =>
//                             elem.tagsList.includes(parseInt(tag))
//                         );
//                     }
//                 );
//             } else {
//                 filteredWorkshops = filteredWorkshops.filter(
//                     (elem: Workshop) => {
//                         return elem.tagsList.includes(parseInt(tag));
//                     }
//                 );
//             }
//         }

//         return filteredWorkshops;
//     }
}
