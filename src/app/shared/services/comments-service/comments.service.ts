import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _api: ApiService) { }

  getComments(postId): Observable<any>{
    return this._api.getRequest(`comments/${postId}`);
  }

  createComment(postId, comment): Observable<any> {
    const body = {
      'text':`${comment}`
    };
    return this._api.postRequest(`comments/${postId}`, body);
  }

  deleteComment(postId,commentId): Observable<any> {
    return this._api.deleteRequest(`comments/${postId}/${commentId}`);
  }

  updateComment(postId, commentId, comment): Observable<any> {
    const body = {
      'text':`${comment}`
    };
    return this._api.putRequest(`comments/${postId}/${commentId}`, body);
  }

}
