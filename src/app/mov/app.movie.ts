import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

//constructor(private router: Router, private appService: AppService,private mov: MovieSearch) { }

export class MovieSearch {

  constructor(){}
  items: any[] = []
  name:any
  outputMov(movies: any[],value:any){
      this.items=movies;
      this.name = value;
  }

  valSend(){
    return this.items
  }
  titleSend(){
    return this.name;
  }
  

}
