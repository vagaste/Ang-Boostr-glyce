import { TestBed, inject } from '@angular/core/testing';

import { AlimentService } from './aliment.service';

describe('AlimentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlimentService]
    });
  });

  it('should be created', inject([AlimentService], (service: AlimentService) => {
    expect(service).toBeTruthy();
  }));
});
