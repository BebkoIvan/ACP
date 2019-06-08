import { Injectable } from '@angular/core';
import { WorkshopsService } from './workshops.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneWorkshopResolverService {
  constructor(private _workshopsService: WorkshopsService,private _router:Router) {}

  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot,
  ): Observable<Workshop> |Promise<Workshop>| Workshop{
      const workshop = this._workshopsService.getOneWorkShop(route.params['id']);
      if (workshop) {
        return workshop;
      } else {
        this._router.navigate(['/Page404']);
      }
    };
}
