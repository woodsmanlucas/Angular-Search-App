import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent {

  @Output() private onSubmit: EventEmitter<string>;

  constructor(){
    this.onSubmit = new EventEmitter<string>();
  }

  searchForm = new FormGroup({
    search: new FormControl('')});

  OnSubmit(){
    console.log(this.searchForm.value)
    this.onSubmit.emit(this.searchForm.value.search)
  }
}
