import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInfoComponent } from './cart-info.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Store, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {State} from '../../store/app.state';
import {SetShoppingCartData} from '../../store/shoppingCartData/shopping-cart.action';
import ShoppingCartModel from '../../models/shopping-cart.model';
import {shoppingCartReducer} from '../../store/shoppingCartData/shopping-cart.reducer';

describe('CartInfoComponent', () => {
  let component: CartInfoComponent;
  let fixture: ComponentFixture<CartInfoComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartInfoComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [RouterTestingModule, StoreModule.forRoot({
        shoppingCartData: shoppingCartReducer
      })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartInfoComponent);
    store = fixture.debugElement.injector.get(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const cart = new ShoppingCartModel();
    cart.productsTotal = 1;
    store.dispatch(new SetShoppingCartData(cart));

    expect(component).toBeTruthy();
  });
});
