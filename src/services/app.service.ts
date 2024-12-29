import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  urlBase = "flask server ka url base";
  auth: any = '';

  setAuthToken() {
    this.auth = (localStorage.getItem('token')) ? localStorage.getItem('token') : '';
  }

  post(url: string, data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'token': this.auth
    });

    return this.http.post(this.urlBase + url, data, { headers })
      .pipe(map((res: any) => res));  // No need to call res.json() here with HttpClient
  }

  get(url: string, data: any = null): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'token': this.auth
    });

    return this.http.get(this.urlBase + url, { headers })
      .pipe(map((res: any) => res));  // No need to call res.json() here with HttpClient
  }
}
