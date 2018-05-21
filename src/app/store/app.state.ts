import ShoppingCartModel from '../models/shopping-cart.model';
import {Customer} from '../models/customer.model';

export interface State {
  shoppingCartData: ShoppingCartModel;
  customerData: Customer;
}

/**
 * Get initial state for shopping cart
 * @returns {ShoppingCartModel}
 */
export const initialShoppingCartState = function () {
  return new ShoppingCartModel();
};


/**
 * Get initial state for shopping cart
 * @returns {ShoppingCartModel}
 */
export const initialCustomerState = function () {
  return new Customer();
};


