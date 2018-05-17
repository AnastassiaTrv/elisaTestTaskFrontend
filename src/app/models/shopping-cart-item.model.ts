/**
 * This class represents the shopping cart item data model
 */
export default class ShoppingCartItem {

  name: string;
  description: string;
  amount: number;
  totalPrice: number;

  constructor() {
    this.name = null;
    this.description = null;
    this.amount = null;
    this.totalPrice = null;
  }
}
