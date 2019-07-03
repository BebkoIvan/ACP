import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/shared/services/api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  
    constructor(private _authService: AuthService, private _api: ApiService) { }


    getOneQuiz(id: any) {
      return this._api.getRequest(`quizzes/${id}`, null, {id: `${id}`});
    }

    getQuizzes(queryParams: any): Observable<any> {
      return this._api.getRequest(`quizzes`, null, queryParams);
    }

    createQuiz(quiz: any) {
      return this._api.postRequest('quizzes', quiz);
    }

    deleteQuiz(id: string) {
      return this._api.deleteRequest(`quizzes/${id}`);
    }

}
