import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {OrderService} from '../../services/order/order.service';
import {OrderMockService} from '../../services/order/order-mock.service';
import {Store, StoreModule} from '@ngrx/store';
import {ToastModule} from 'ng2-toastr';
import {shoppingCartReducer} from '../../store/shoppingCartData/shopping-cart.reducer';
import {State} from '../../store/app.state';
import ShoppingCartModel from '../../models/shopping-cart.model';
import {SetShoppingCartData} from '../../store/shoppingCartData/shopping-cart.action';
import ShoppingCartItem from '../../models/shopping-cart-item.model';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let store: Store<State>;
  let productList: ShoppingCartItem[];
  let elemNative: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
        shoppingCartData: shoppingCartReducer
      }),
        ToastModule.forRoot(),
        BrowserAnimationsModule
      ],
      providers: [
        {provide: OrderService, useClass: OrderMockService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    store = fixture.debugElement.injector.get(Store);
    elemNative = fixture.debugElement.nativeElement;

    // create shopping cart state
    const cart = new ShoppingCartModel();

    productList = [
      {
        productName: 'test product 1',
        productId: 'test id 1',
        quantity: 5,
        totalPrice: 200
      },
      {
        productName: 'test product 2',
        productId: 'test id 2',
        quantity: 3,
        totalPrice: 100
      },
    ];

    cart.productList = productList;
    cart.productsTotal = 8;
    cart.priceTotal = 300;

    // add created cart state into store
    store.dispatch(new SetShoppingCartData(cart));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get product list on init', () => {
    expect(component.cartItemsList).toEqual(productList);
  });

  it('should hide "Send order" button when making request', () => {
    component.makeOrder();
    fixture.detectChanges();
    expect(elemNative.querySelector('.order-btn')).toBeNull();
  });

});
