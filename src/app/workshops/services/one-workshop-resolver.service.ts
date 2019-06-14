import { Injectable } from '@angular/core';
import { WorkshopsService } from './workshops.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { TagsService } from 'src/app/shared/services/tags-service/tags.service';
import { CommentsService } from 'src/app/shared/services/comments-service/comments.service';

@Injectable({
  providedIn: 'root'
})
export class OneWorkshopResolverService {
  constructor(private _workshopsService: WorkshopsService, private _router: Router,
              private _commentsService: CommentsService,  private _tagsService: TagsService) {}

  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot,
  ): Observable<any> |Observable<[any,any]> |Promise<any>| any {
    const workshop = this._workshopsService.getPostById(route.params.id);
    if (workshop && this._tagsService.allTags.length) {
        return workshop;
      } else if (workshop && !this._tagsService.allTags.length) {
        return combineLatest(this._workshopsService.getPostById(route.params.id),this._tagsService.getTags('all'));
      } else {
        this._router.navigate(['/Page404']);
      }
    }
}
