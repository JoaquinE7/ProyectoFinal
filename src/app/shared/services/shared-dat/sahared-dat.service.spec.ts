import { TestBed } from '@angular/core/testing';

import { SaharedDatService } from './sahared-dat.service';

describe('SaharedDatService', () => {
  let service: SaharedDatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaharedDatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
