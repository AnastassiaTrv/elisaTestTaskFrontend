import { initialShoppingCartState } from '../app.state';
import * as ShoppingCartActions from './shopping-cart.action';
import {environment} from '../../../environments/environment.prod';
import ShoppingCartItem from '../../models/shopping-cart-item.model';

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
      return addShoppingCartItemIntoState(state, action.payload);
    }

    case ShoppingCartActions.REMOVE_SHOPPING_CART_ITEM: {
      return removeShoppingCartItemFromState(state, action.payload);
    }

    default: return state;
  }
}

/**
 * Add new item into shopping carts product list (if current item is not there yet).
 * In current item already exists in the list then just increase the amount and total price.
 * @param state - current state of shopping cart
 * @param item - item to add
 * @returns {{}} - new state
 */
function addShoppingCartItemIntoState(state, item: ShoppingCartItem) {
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
    throw new Error(`Unable to add item into shopping cart, duplicates are found, product id: ${item.productId}`);
  }

  // increase total amount of products and total price
  stateCopy.productsTotal += item.amount;
  stateCopy.priceTotal += item.totalPrice;

  return stateCopy;
}

/**
 * Remove item from shopping carts product list. Decrease products total amount and price in the shopping cart.
 * @param state - current state of shopping cart
 * @param {ShoppingCartItem} item
 * @returns {{}}
 */
function removeShoppingCartItemFromState(state, item: ShoppingCartItem) {
  const stateCopy = {...state}; // make copy, state should be immutable

  const filtered = stateCopy.productList.filter((product, index) => {
    product.index = index;
    return product.productId === item.productId;
  });

  if (filtered.length === 1) {
    const product = stateCopy.productList[filtered[0].index];

    // decrease total amount of products and total price
    stateCopy.productsTotal -= product.amount;
    stateCopy.priceTotal -= item.totalPrice;

    stateCopy.productList.splice(product.index, 1); // remove product from list

  } else if (!environment.production) {
    throw new Error(`Unable to delete item from shopping cart, product id: ${item.productId}`);
  }

  return stateCopy;
}
