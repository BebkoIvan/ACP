import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  static prepareParams(params): HttpParams{
    if (!params) {
      return null;
    }

    let httpParams: HttpParams = new HttpParams();

    for (const item in params) {
      if (params.hasOwnProperty(item)) {
        httpParams = httpParams.append(item,params[item]);
      }
    }
    return httpParams;
  }

  static prepareOptions(headers?: HttpHeaders, params?: HttpParams) {
    return {
      params: ApiService.prepareParams(params),
      headers: headers || null
    };
  }

  getEndPoint(url): string {
    return `${environment.api}/${url}`;
  }

  postRequest(url: string, headers?: HttpHeaders, body?, params?: HttpParams): Observable<any>{
    return this.http.post(this.getEndPoint(url), body, ApiService.prepareOptions(headers,params));
  }

  getRequest(url: string, headers?: HttpHeaders, params?: HttpParams): Observable<any> {
    return this.http.get(this.getEndPoint(url), ApiService.prepareOptions(headers, params));
  }

  putRequest(url: string, headers: HttpHeaders, body, params?: HttpParams): Observable<any> {
    return this.http.put(this.getEndPoint(url), body, ApiService.prepareOptions(headers, params));
  }

  deleteRequest(url: string, headers?: HttpHeaders): Observable<any> {
    return this.http.put(this.getEndPoint(url), ApiService.prepareOptions(headers));
  }

}
