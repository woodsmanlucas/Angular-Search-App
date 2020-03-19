import { Component, OnInit } from '@angular/core';
import {Person } from '../../model/person'
import * as observable from 'rxjs';
import {PeopleService} from '../../services/people-service.service'
import { PersonForm } from 'src/app/model/person-form';

@Component({
  selector: 'app-list',
  template: `<app-search (onSubmit)="OnSubmit($event)"></app-search> <br/> 
  <button (click)="seedData()">Seed Data</button>
  <p *ngIf="loading">Loading</p>
  <div class="people">
              <app-detail *ngFor="let person of people$ | async"
                          [person]="person"
                          (onDelete)="OnDelete($event)"></app-detail>
                          </div>
                          <app-create (onCreate)="OnCreate($event)" ></app-create>`,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public loading: boolean = true;
  public people$ : observable.Observable<Person[]>

  constructor(private peopleService: PeopleService) { }

  async ngOnInit() {
    this.people$ = await this.peopleService.getPeople()
    this.loading = false
  }

  seedData(){
    this.peopleService.seedData()    
    this.people$ = this.peopleService.getPeople()
    console.log(this.people$)
  }

  OnDelete(id: number){
    this.peopleService.deletePerson(id)
    this.people$.subscribe(
      val => this.AssignValues(val.filter(
        (person) => {return person.personId != id})))
  }

  OnSubmit(search: string){
    this.loading = true
    console.log("inside list; Search value is " + search)
    this.people$ = observable.of()
    setTimeout(() => {   
      this.people$ = this.peopleService.getPeople()
      this.people$.subscribe(
        val => this.AssignValues(val.filter(
          (person) => {return person.firstName.toLowerCase().includes(search) || person.lastName.toLowerCase().includes(search) || person.interests.toLowerCase().includes(search)})))
  }, 2000)
     }

  AssignValues(peopleSorted: Person[]){
    this.people$ = observable.of(peopleSorted)
    this.loading = false
  }

  OnCreate(model: PersonForm){
    console.log(model)
    this.peopleService.addPerson(model);
    this.people$ = this.peopleService.getPeople();
  }
}
