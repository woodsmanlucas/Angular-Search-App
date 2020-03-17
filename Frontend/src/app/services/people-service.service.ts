import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as observable from 'rxjs';

import { Person } from '../model/person'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private people: Person[]

  constructor() {     
    this.people = [
    {firstName: "Jane", lastName: "Chen", address: "Vancouver", interests: "Moutain biking, skiing", age: 28, picture_url: "http://via.placeholder.com/150x150"},
    {firstName: "Jeff", lastName: "Johnson", address: "Kamloops", interests: "3d Printing", age: 37, picture_url: "http://via.placeholder.com/150x150"}
  ]}

  getPeople(): observable.Observable<Person[]>{
    return observable.of(this.people)
  }
}
