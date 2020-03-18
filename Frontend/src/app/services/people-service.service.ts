import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as observable from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Person } from '../model/person'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private people: Person[]

  constructor(private http: HttpClient) {     
  }

  getPeople(): observable.Observable<Person[]>{
    return this.http.get<Person[]>('https://angularsearchapp20200317120515.azurewebsites.net/api/people')
  }

  seedData(): void{
    fetch('https://angularsearchapp20200317120515.azurewebsites.net/api/people/seed')
  }

  deletePerson(personId: number): void{
    fetch('https://angularsearchapp20200317120515.azurewebsites.net/api/people/'+ personId, { method: 'DELETE'})
  }
}
