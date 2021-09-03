import { TestBed } from '@angular/core/testing';

import { StockStrategyService } from './stock-strategy.service';

describe('StockStrategyService', () => {
  let service: StockStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
