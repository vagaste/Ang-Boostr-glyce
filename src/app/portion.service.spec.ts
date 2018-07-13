import { TestBed, inject } from '@angular/core/testing';

import { PortionService } from './portion.service';

describe('PortionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortionService]
    });
  });

  it('should be created', inject([PortionService], (service: PortionService) => {
    expect(service).toBeTruthy();
  }));
});
