import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly apikey = '9963f84';
  readonly api = `https://www.omdbapi.com/?apikey=${this.apikey}&type=movie&r=json`;

  constructor(private http: HttpClient) { }

  

  getMoviesAtPage(titleValue: any, pageValue: number): Observable<any> {
    return this.http.get(`${this.api}&s=${titleValue}*&page=${pageValue}`);
  }


}
