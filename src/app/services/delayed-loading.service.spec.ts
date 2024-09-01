import { TestBed } from '@angular/core/testing';

import { DelayedLoadingService } from './delayed-loading.service';

describe('DelayedLoadingService', () => {
  let service: DelayedLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelayedLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
