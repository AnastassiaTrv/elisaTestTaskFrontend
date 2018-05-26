import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalogComponent } from './product-catalog.component';
import {ProductsService} from '../../services/product/products.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {PriceService} from '../../services/price/price.service';
import {ProductsMockService, PRODUCTS} from '../../services/product/products-mock.service';
import {PriceMockService, PRICES} from '../../services/price/price-mock.service';

describe('ProductCatalogComponent', () => {
  let component: ProductCatalogComponent;
  let fixture: ComponentFixture<ProductCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCatalogComponent ],
      providers: [
        {provide: ProductsService, useClass: ProductsMockService},
        {provide: PriceService, useClass: PriceMockService}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get price list on init', () => {
    expect(component.priceList).toBe(PRICES);
  });

  it('should get price object by id', () => {
    expect(component.getProductPriceById(2, null)).toBe(PRICES[1]);
  });



});
