import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable,combineLatest } from 'rxjs';
import {WorkshopsService} from './workshops.service';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { TSInterfaceBody } from 'babel-types';

@Injectable({
    providedIn: 'root'
})
export class WorkshopResolverService implements Resolve<any[]> {
    constructor(private _workshopsService: WorkshopsService, private _user: UserAuthService, private _tagsService: TagsService) {}
    body;
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> |Promise<any[]>| any[] {
        if (route.queryParams.category || route.queryParams.tags) {
            if (route.queryParams.category === 'All') {
                if (this._workshopsService.allWorkshops && !route.queryParams.tags) {
                    return this._workshopsService.allWorkshops;
                } else {
                    return combineLatest(this._workshopsService.getPosts(null, route.queryParams.tags), this._tagsService.getTags('all'));
                }
            } else if (route.queryParams.category === 'My Workshops' || route.queryParams.category === 'Favorite') {
                
                    return combineLatest(this._workshopsService.getPosts('My', route.queryParams.tags), this._tagsService.getTags('all'));
                
               
            }
            else{
                return combineLatest(this._workshopsService.getPosts(null, route.queryParams.tags), this._tagsService.getTags('all'));
            }
        } else {
            if (this._workshopsService.allWorkshops ) {
                return this._workshopsService.allWorkshops;
            } else {

                return combineLatest(this._workshopsService.getPosts(null, route.queryParams.tags), this._tagsService.getTags('all'));
            }
        }

    }
}
