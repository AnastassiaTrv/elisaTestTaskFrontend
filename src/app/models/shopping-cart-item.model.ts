/**
 * This class represents the shopping cart item data model
 */
export default class ShoppingCartItem {

  name: string;
  productId: string;
  amount: number;
  totalPrice: number;

  constructor() {
    this.name = null;
    this.productId = null;
    this.amount = null;
    this.totalPrice = null;
  }
}
