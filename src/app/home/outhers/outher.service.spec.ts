import { TestBed } from '@angular/core/testing';

import { OutherService } from './outher.service';

describe('OutherService', () => {
  let service: OutherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
