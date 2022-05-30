import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchFormControl = new FormControl();
  value: any;
  p:Number = 1
  
  constructor() { }

  ngOnInit(): void {

    this.searchFormControl.valueChanges

      .subscribe(newValue => {
        this.value = newValue;
      }
      );

  }
}
