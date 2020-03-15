import { Component, OnInit } from '@angular/core';
import {Person } from '../../model/person'

@Component({
  selector: 'app-list',
  template: `<div class="people">
              <app-detail [person]="person"
                          *ngFor="let person of people"></app-detail>
                          </div>`,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public people :  Person[]

  constructor() { }

  ngOnInit(): void {
    this.people = [
      new Person("Jane", "Chen", "Vancouver", "Moutain biking, skiing", 28, "http://via.placeholder.com/150x150"),
      new Person("Jeff", "Johnson", "Kamloops", "3d Printing", 37, "http://via.placeholder.com/150x150")
    ]
  }

}
