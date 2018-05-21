import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Constants} from '../../app-constants';
import {Store} from '@ngrx/store';
import {State} from '../../store/app.state';
import ShoppingCartItem from '../../models/shopping-cart-item.model';

@Injectable()
export class OrderService {

  private _orderUrl = Constants.ORDERS_URl;
  cartItemsList: ShoppingCartItem[]; // ngrx variable

  constructor(private _http: HttpClient, private store: Store<State>) {
    this.subscribeToCartItemList();
  }


  /**
   * Synchronize productList from global state with local variable
   */
  subscribeToCartItemList() {
    this.store.select( state => state.shoppingCartData.productList).subscribe( items  => {
      this.cartItemsList = items;
    });
  }


  processShoppingCartItemList() {
    
  }

  sentOrder() {
    const params = new HttpParams().set('order', '').toString();

    return this._http.post(this._orderUrl, params);

  }
}
