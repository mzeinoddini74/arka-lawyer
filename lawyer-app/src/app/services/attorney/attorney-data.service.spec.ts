import { TestBed } from '@angular/core/testing';

import { AttorneyDataService } from './attorney-data.service';

describe('AttorneyDataServiceService', () => {
  let service: AttorneyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttorneyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
