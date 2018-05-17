import { initialShoppingCartState } from '../app.state';
import * as ShoppingCartActions from './shopping-cart.action';

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
 * Make copy of existing state (as it should be immutable) and add new item into list of products
 * @param state - existing state of shopping cart
 * @param item - item to add
 * @returns {{}} - new state
 */
function addItemInToState(state, item) {
  const stateCopy = {...state};
  stateCopy.productList.push(item);

  return stateCopy;
}
