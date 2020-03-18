import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as observable from 'rxjs';

import { ListComponent } from './list.component';

describe('ListComponent Angular-Aware test', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.people$ = observable.of([{ personId: 1, firstName: "Jane", lastName: "Chen", address:"Vancouver", age: 27, interests: "Mountian biking, Skiing", picture_url: ""}  ])
    fixture.detectChanges();
  });


});
