import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people-service.service';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleService);
  });

});
