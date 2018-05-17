/**
 * This class represents the Shopping Cart data model
 */
import ProductModel from './shopping-cart-item.model';

export default class ShoppingCartModel {

  productsTotal: number;
  priceTotal: number;
  productList: ProductModel[];

  constructor(productsTotal: number, priceTotal: number, productList: ProductModel[]) {
    this.productsTotal = productsTotal;
    this.priceTotal = priceTotal;
    this.productList = productList;
  }
}
