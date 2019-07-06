import { Injectable } from '@angular/core';
import { Workshops } from '../workshops-data/workshops';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { mergeMap, tap, map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAuthData } from 'src/app/auth/store/auth.selectors';

@Injectable({
    providedIn: 'root'
})
export class WorkshopsService {
    constructor(private _userService: AuthService, private store: Store<AppState>, private _api: ApiService) {}

    totalPosts;


    getWorkshops(queryParams: any) {
        let user = this.store.select(selectAuthData);
        const   params = {
            page: '',
            authorId: '',
            tags: '',
            withComments: 1
        };

        if (queryParams.withComments) {
            params.withComments = queryParams.withComments;
        }
        if (queryParams.tags) {
            params.tags = queryParams.tags.split(',').join('|');
        }

        if (queryParams.page) {
            params.page = queryParams.page;
        }


        if (queryParams.category === 'My Workshops' || queryParams.category === 'Favorite') {
            user.subscribe(authData => {
                if (authData) {
                params.authorId = authData._id;
            } });
        }
        return this._api.getRequest(`posts`, null, params);
    }


    updatePost(id, body) {
        return this._api.putRequest(`posts/${id}`, body);
    }

    createPost(body){
        return this._api.postRequest('posts', body);
    }
    
    deletePost(id) {
        return this._api.deleteRequest(`posts/${id}`);
    }

    getPostById(id) {
        return this._api.getRequest(`posts/${id}`);
    }

    getUsers(users: any) {
        return this._api.postRequest('users/manyusers', users);
    }

    getReactionsByPost(postId: string, answerType: number) {
        return this._api.getRequest(`reactions/getreactions/${postId}/${answerType}`);
    }



}
