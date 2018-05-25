import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceComponent } from './product-price.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ProductPriceComponent', () => {
  let component: ProductPriceComponent;
  let fixture: ComponentFixture<ProductPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
