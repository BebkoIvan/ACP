import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { selectAllTags } from 'src/app/workshops/store/workshops.selectors';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  allTags: Array<any> = [];
  constructor(private _api: ApiService, private store: Store<AppState>) { }

  getTags(path): Observable<any> {
    return this._api.getRequest(`tags/${path}`);
  }

  getTagsNames(tags: Array<any>) {
    return 0;
  }

  getTagName(tag) {
    this.store.pipe(
      select(selectAllTags),
      map((tags) => {
        return {
        tagTitle: tags.find(x => x.seq === tag).name, isActive: false, seq: tag };
      })
  );
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
