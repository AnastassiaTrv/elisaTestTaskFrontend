import ShoppingCartItem from './shopping-cart-item.model';

/**
 * This class represents the Shopping Cart data model
 */
export default class ShoppingCartModel {

  productsTotal = 0;
  productList: ShoppingCartItem[] = [];

  constructor() {}
}
