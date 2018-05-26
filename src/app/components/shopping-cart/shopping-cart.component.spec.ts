import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {Store, StoreModule} from '@ngrx/store';
import {shoppingCartReducer} from '../../store/shoppingCartData/shopping-cart.reducer';
import {State} from '../../store/app.state';
import ShoppingCartModel from '../../models/shopping-cart.model';
import {SetShoppingCartData} from '../../store/shoppingCartData/shopping-cart.action';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
          shoppingCartData: shoppingCartReducer
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    store = fixture.debugElement.injector.get(Store);

    // set data into store
    const cart = new ShoppingCartModel();
    store.dispatch(new SetShoppingCartData(cart));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
