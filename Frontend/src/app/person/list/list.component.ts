import { Component, OnInit } from '@angular/core';
import {Person } from '../../model/person'
import {Observable} from 'rxjs';
import {PeopleService} from '../../services/people-service.service'

@Component({
  selector: 'app-list',
  template: `<div class="people">
              <app-detail *ngFor="let person of people$ | async"
                          [person]="person"></app-detail>
                          </div>`,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public people$ : Observable<Person[]>

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people$ = this.peopleService.getPeople();
  }

}
