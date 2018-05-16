import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPriceCalculatorComponent } from './total-price-calculator.component';

describe('TotalPriceCalculatorComponent', () => {
  let component: TotalPriceCalculatorComponent;
  let fixture: ComponentFixture<TotalPriceCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPriceCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPriceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
