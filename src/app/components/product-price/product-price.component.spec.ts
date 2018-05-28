import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceComponent } from './product-price.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {IPrice} from '../../models/price.model';
import {PRICES_PROCESSED} from '../../services/price/price-mock.service';

describe('ProductPriceComponent', () => {
  let component: ProductPriceComponent;
  let fixture: ComponentFixture<ProductPriceComponent>;
  let expectedPrice: IPrice;
  let elemNative: HTMLElement;

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
    elemNative = fixture.debugElement.nativeElement;

    // set expected price from constant for testing
    expectedPrice = PRICES_PROCESSED[0];

    // emulate @Input for component
    component.priceInfo = expectedPrice;

    // hide calculator by default (show in individual tests)
    component.showPriceCalculator = false;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate price on init', () => {
    expect(component.totalPrice).toBe(80); // 80 -> calculated from PRICES[0]
  });

  it('total price is displayed (when needed)', () => {
    component.showPriceCalculator = true;
    fixture.detectChanges();
    expect(elemNative.querySelector('.total-price').textContent).toBe('80');
  });

  it('total price is updated when quantity changes', () => {
    component.showPriceCalculator = true;
    component.selectedQuantity = '2';
    component.calculateTotalPrice();

    fixture.detectChanges();

    expect(elemNative.querySelector('.total-price').textContent).toBe('160');
  });

  it('one time price is displayed', () => {
    expect(elemNative.querySelector('.one-time-price').textContent)
      .toBe(expectedPrice.oneTimePrice.toString());
  });

  it('recurring price is displayed', () => {
    expect(elemNative.querySelector('.rec-price').textContent)
      .toBe(expectedPrice.recurringPrice.toString());
  });

  it('recurring count is displayed', () => {
    expect(elemNative.querySelector('.rec-count').textContent)
      .toBe(expectedPrice.recurringCount.toString());
  });
});
