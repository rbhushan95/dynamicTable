import { TestBed, inject } from '@angular/core/testing';

import { RentservicesmainService } from './rentservicesmain.service';

describe('RentservicesmainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentservicesmainService]
    });
  });

  it('should be created', inject([RentservicesmainService], (service: RentservicesmainService) => {
    expect(service).toBeTruthy();
  }));
});
