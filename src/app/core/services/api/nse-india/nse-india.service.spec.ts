import { TestBed } from '@angular/core/testing';

import { NseIndiaService } from './nse-india.service';

describe('NseIndiaService', () => {
  let service: NseIndiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NseIndiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
