import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as observable from 'rxjs';

import { Person } from '../model/person'
import { PersonForm } from '../model/person-form';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

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

  addPerson(person: PersonForm): void{
    let json = JSON.stringify({firstName: person.firstName, lastName: person.lastName, address: person.address, interests: person.interests, age: person.age, picture_url: person.picture_url})
    console.log(json)
    console.log(fetch('https://angularsearchapp20200317120515.azurewebsites.net/api/people/', { method: 'POST',  headers: {
      'Content-Type': 'application/json',
    }, body: json}));
  }
}
