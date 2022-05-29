import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SearchComponent} from '../search/search.component'
import { AppService } from '../app.service';
import { MovieSearch } from '../mov/app.movie';

@Injectable({
  providedIn: 'root'
})
   
export class SearchMov {

    movies: any[] = [];
    
    //value: any;
    p: number = 1
    isDone = true;
    constructor(private appService: AppService, private mov: MovieSearch) { }

    getVal(title:any){
        this.getMovies(title,this.p)
    }

  getMovies(value: any,p:any) {
    this.appService.getMoviesAtPage(value,p).subscribe(data => {
        
          const items = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              items.push(data[key]);
            }
          }
          this.movies = items[0];
          this.isDone = true;
          this.mov.outputMov(this.movies,value)
      })
      
      //return this.movies;
  }
  getMoviesYear(value: any,p:any) {
    this.appService.getMoviesAtPage(value,p).subscribe(data => {
        
          const items = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              items.push(data[key]);
            }
          }
          this.movies = items[0];
          this.isDone = true;
          this.mov.outputMov(this.movies,value)
      })
      
      //return this.movies;
  }

}
