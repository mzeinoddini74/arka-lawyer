import { TestBed } from '@angular/core/testing';

import { AttorneyDataServiceService } from './attorney-data-service.service';

describe('AttorneyDataServiceService', () => {
  let service: AttorneyDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttorneyDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
