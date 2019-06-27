import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable,combineLatest } from 'rxjs';
import {WorkshopsService} from './workshops.service';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { AuthService } from 'src/app/services/auth.service';
import { TSInterfaceBody } from 'babel-types';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WorkshopResolverService implements Resolve<any[]> {
    constructor(private _workshopsService: WorkshopsService,
                private store: Store<AppState>, private _user: AuthService,
                private _tagsService: TagsService) {}
    body;
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> |Promise<any[]>| any[] {

    return this._tagsService.getTags('all');
    

}
}
