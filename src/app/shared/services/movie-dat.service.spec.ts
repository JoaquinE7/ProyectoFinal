import { TestBed } from '@angular/core/testing';

import { MovieDatService } from './movie-dat.service';

describe('MovieDatService', () => {
  let service: MovieDatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
