import { TestBed, inject } from '@angular/core/testing';

import { PriceService } from './price.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('PriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceService, HttpClient],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([PriceService], (service: PriceService) => {
    expect(service).toBeTruthy();
  }));
});
