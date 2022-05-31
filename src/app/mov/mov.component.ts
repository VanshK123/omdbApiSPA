import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

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
  year: number=new Date().getFullYear();
  searchFormControl = new FormControl();
  checked: boolean = false;

  constructor(private appService: MovieService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.searchFormControl.valueChanges

    .subscribe(newValue => {
      this.value = newValue;
    }
    );
  this.value = this.route.snapshot.paramMap.get('mov')
  this.p = Number(this.route.snapshot.paramMap.get('page'))
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
    
          this.movies = data;
         
      })   
  }

  check(event:any){

    this.checked = event.target.checked;
    
  }
  
  
 
 
}
