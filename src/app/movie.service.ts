import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class MovieService {

  readonly apikey = '9963f84';
  readonly api = `https://www.omdbapi.com/?apikey=${this.apikey}&type=movie&r=json`;

  constructor(private http: HttpClient) { }
  
  getMoviesAtPage(titleValue: any, pageValue: number): Observable<any> {
    return (this.http.get(`${this.api}&s=${titleValue}*&page=${pageValue}`)).pipe(map((inp) => this.transform(inp)));
  }

  transform(data:any){
    data = data.Search
    for(const i in data){
      data[i] = this.camelCase(data[i]);
    }
    return data;
  }
  camelCase(value:any){
    
    return {title:value.Title, poster:value.Poster, year: value.Year};

  }
}
