import { initialShoppingCartState } from '../app.state';
import * as ShoppingCartActions from './shopping-cart.action';
import {environment} from '../../../environments/environment.prod';

export type Action = ShoppingCartActions.All;

/**
 * Reducer function for shopping card state modifications
 * @param {ShoppingCartModel} state - new state that should be applied
 * @param {Action} action - action that should be performed on shopping cart state
 * @returns {any} - new state (if modified) or existing state (if no changes has been made)
 */
export function shoppingCartReducer(state = initialShoppingCartState(), action: Action) {
  switch (action.type) {
    case ShoppingCartActions.GET_SHOPPING_CART_DATA: {
      return state;
    }

    case ShoppingCartActions.SET_SHOPPING_CART_DATA: {
      return {
        ...state,
        priceTotal: action.payload.priceTotal,
        productsTotal: action.payload.productsTotal,
        productList: action.payload.productList
      };
    }

    case ShoppingCartActions.ADD_SHOPPING_CART_ITEM: {
      return addItemInToState(state, action.payload);
    }

    default: return state;
  }
}

/**
 * Add new item into product list of shopping cart (if current item is not there yet),
 * otherwise increase the amount and total price of item in the list
 * @param state - existing state of shopping cart
 * @param item - item to add
 * @returns {{}} - new state
 */
function addItemInToState(state, item) {
  const stateCopy = {...state}; // make copy, state should be immutable

  const filtered = stateCopy.productList.filter((product, index) => {
    product.index = index;
    return product.productId === item.productId;
  });

  if (filtered.length === 0) {
    stateCopy.productList.push(item);

  } else if (filtered.length === 1) {
    const product = stateCopy.productList[filtered[0].index];
    product.amount += item.amount;
    product.totalPrice += item.totalPrice;

  } else if (!environment.production) {
    console.warn('Unable to add item into shopping cart, duplicates are found');
  }

  return stateCopy;
}
