import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() public person: Person

  constructor() { }

  ngOnInit(){}

}
