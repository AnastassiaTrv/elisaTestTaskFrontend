import ShoppingCartModel from '../../models/shopping-cart.model';
import {Action} from '@ngrx/store';
import ShoppingCartItem from '../../models/shopping-cart-item.model';

/**
 * Actions for manipulation with shopping cart data in global store
 */


export const GET_SHOPPING_CART_DATA = 'GET_SHOPPING_CART_DATA';
export const SET_SHOPPING_CART_DATA = 'SET_SHOPPING_CART_DATA';
export const ADD_SHOPPING_CART_ITEM = 'ADD_SHOPPING_CART_ITEM';

export class GetShoppingCartData implements Action {
  readonly type = GET_SHOPPING_CART_DATA;

  constructor() {}
}


export class SetShoppingCartData implements Action {
  readonly type = SET_SHOPPING_CART_DATA;
  payload: ShoppingCartModel;

  constructor(payload: ShoppingCartModel) {
    this.payload = payload;
  }
}


export class AddShoppingCartItem implements Action {
  readonly type = ADD_SHOPPING_CART_ITEM;
  payload: ShoppingCartItem;

  constructor(payload: ShoppingCartItem) {
    this.payload = payload;
  }
}


export type All = GetShoppingCartData | SetShoppingCartData | AddShoppingCartItem;
