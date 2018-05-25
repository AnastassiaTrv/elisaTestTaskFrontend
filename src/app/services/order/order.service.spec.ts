import { TestBed, inject } from '@angular/core/testing';

import { OrderService } from './order.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService, HttpClient],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));
});
