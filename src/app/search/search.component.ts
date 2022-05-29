import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import {MovieSearch} from '../mov/app.movie';
import { SearchMov } from './app.searchMov';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies: any[] = [];
  searchFormControl = new FormControl();
  value: any;
  urlStore=[
    {val:''}
  ]

  p: number = 1
  isDone = true;
  val = 0
  constructor(private router: Router, private appService: AppService, private search: SearchMov) { }
  
  ngOnInit(): void {
    
    this.searchFormControl.valueChanges
    
    .subscribe(newValue => {
      this.isDone = false;
      this.value = newValue;
      this.urlStore = [
        {val: this.value}
      ]
      this.search.getVal(this.value)
      //this.refresh();

    }
    );
  
  }
  check(){
    this.val = 1
  }
  /*
  bruh(){
    return this.value;
  }
  refresh() {
    this.appService.getMovies(this.value).subscribe(data => {
      if (data.Response !== 'False') {
        const items = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            items.push(data[key]);
          }
        }
        this.movies = items[0];
        this.isDone = true;
      } 
    })
    return this.movies;
  } */


}
