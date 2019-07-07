import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { ApiService } from './api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {

  constructor(private store: Store<AppState>, private _api: ApiService) { }

  toggleReaction(reactionType: string, postId: string, withAthourIds?: number) {
    return this._api.getRequest(`reactions/toggle/${reactionType}/${postId}/${withAthourIds ? withAthourIds : 1}`);
  }

  getReactionsByPostId(postId: string, withComments?: number){
    return this._api.getRequest(`reactions/getreactions/${postId}/${withComments ? withComments : 1}`);
  }
}
