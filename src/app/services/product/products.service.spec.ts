import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService, HttpClient],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});
