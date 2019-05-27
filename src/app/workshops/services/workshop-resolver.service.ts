import { Injectable } from "@angular/core";
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import {WorkshopsService} from './workshops.service'

@Injectable({
    providedIn: "root"
})
export class WorkshopResolverService implements Resolve<Workshop[]> {
    constructor(private _workshopsService:WorkshopsService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<Workshop[]> |Promise<Workshop[]>| Workshop[]{
        if(route.queryParams.category){
            return this._workshopsService.filteredWorkshops(route.queryParams.category);
        }
        else{
        return this._workshopsService.getWorkShops(route.params.id);
        }
    };
}
