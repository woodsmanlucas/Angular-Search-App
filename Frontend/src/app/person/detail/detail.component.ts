import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() public person: Person
  @Output() private onDelete: EventEmitter<number>;


  constructor() {
    this.onDelete = new EventEmitter<number>();
   }

  ngOnInit(){}

  delete(personId: number){
    this.onDelete.emit(personId)
    }
}
