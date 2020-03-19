import { Component, Output, EventEmitter } from '@angular/core';

import{ PersonForm } from '../../model/person-form';
import {PeopleService} from '../../services/people-service.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  @Output() private onCreate: EventEmitter<PersonForm>;

  constructor() {
    this.onCreate = new EventEmitter<PersonForm>();
   }

    model = new PersonForm("Jane", "Chen", "Vancouver", "Mountain Biking, Skiing", 26, "")
  
    submitted = false;
  
    onSubmit() { 
      this.submitted = true;
      this.onCreate.emit(this.model)
    }
}
