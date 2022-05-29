import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import {SearchComponent} from '../search/search.component'
import { SearchMov } from '../search/app.searchMov';
import { MovieSearch } from './app.movie';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-mov',
  templateUrl: './mov.component.html',
  styleUrls: ['./mov.component.scss']
})

export class MovComponent implements OnInit {
  movies: any[] = [];
  
  value: any;
  p: any = 1
  isDone = true;
  currentYear: number=new Date().getFullYear();
  year = this.currentYear
  
  val: boolean = false;
  constructor(private temp: MovieSearch,private appService: AppService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    
    //this.value = this.temp.titleSend();
    //console.log(this.movies)
  this.value = this.route.snapshot.paramMap.get('mov')
  this.p = this.route.snapshot.paramMap.get('page')
  this.p = Number(this.p)
  this.getMoviesPage();
  }
  forward(){
    this.p = this.p + 1
    this.getMoviesPage()
  }
  back(){
    this.p = this.p - 1
    this.getMoviesPage()
  }
  getMoviesPage() {
    this.appService.getMoviesAtPage(this.value,(this.p)).subscribe(data => {
        
          const items = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              items.push(data[key]);
            }
          }
          this.movies = items[0];
          this.isDone = true;
        
      })
      
      //return this.movies;
  }
  check(event:any){
    if(event.target.checked){
    this.val = true
    
    }
    else{
      this.val = false;
    }
  }
  
 
 
}
