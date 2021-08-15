import { TestBed } from '@angular/core/testing';

import { BoksgetService } from './boksget.service';

describe('BoksgetService', () => {
  let service: BoksgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoksgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
