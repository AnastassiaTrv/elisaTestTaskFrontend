import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {OrderService} from '../../services/order/order.service';
import {OrderMockService} from '../../services/order/order-mock.service';
import {StoreModule} from '@ngrx/store';
import {ToastModule} from 'ng2-toastr';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [RouterTestingModule, StoreModule.forRoot([]), ToastModule.forRoot()],
      providers: [
        {provide: OrderService, useClass: OrderMockService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
