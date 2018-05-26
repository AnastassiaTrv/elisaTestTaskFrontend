import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {PRODUCTS} from '../../services/product/products-mock.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let elemNative: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    elemNative = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;

    component.name = PRODUCTS[0].name;
    component.description = PRODUCTS[0].description;

    fixture.detectChanges();
  });

  it('should render products name', () => {
    expect(elemNative.querySelector('.card-title').textContent).toContain(PRODUCTS[0].name);
  });

  it('should render products description', () => {
    expect(elemNative.querySelector('.card-text').textContent).toContain(PRODUCTS[0].description);
  });
});
