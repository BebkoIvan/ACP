import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private _api: ApiService) { }

  getTags(path): Observable<any>{
    return this._api.getRequest(`tags/${path}`);
  }

  createTag(name): Observable<any> {
    const body = {
      'name':`${name}`
    };
    return this._api.postRequest('tags', body);
  }

  deleteTag(seq): Observable<any> {
    return this._api.deleteRequest(`tags/${seq}`);
  }
}