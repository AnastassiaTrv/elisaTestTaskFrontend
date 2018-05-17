import ShoppingCartModel from '../models/shopping-cart.model';
import ShoppingCartItem from '../models/shopping-cart-item.model';

export interface State {
  shoppingCartData: {
    productsTotal: number,
    priceTotal: number,
    productList: ShoppingCartItem[]
  };
}


/**
 * Get initial state for shopping cart
 * @returns {ShoppingCartModel}
 */
export const initialShoppingCartState = function () {
  return new ShoppingCartModel(0, 0, []);
};


