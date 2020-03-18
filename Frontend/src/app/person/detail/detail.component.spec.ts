import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import {By} from '@angular/platform-browser'

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    component.person = { personId: 1, firstName: "Jane", lastName: "Chen", address:"Vancouver", age: 27, interests: "Mountian biking, Skiing", picture_url: ""}
    fixture.detectChanges();
  });

  it('should create a component and render person data', () => {
    expect(component).toBeTruthy();
    const nameEl = fixture.debugElement.query(By.css('h4'))
    expect(nameEl.nativeElement.textContent).toEqual('Jane Chen')
    const interestsEl = fixture.debugElement.query(By.css('.interests'))
    expect(interestsEl.nativeElement.textContent).toEqual('Interests: Mountian biking, Skiing')
  });
});
