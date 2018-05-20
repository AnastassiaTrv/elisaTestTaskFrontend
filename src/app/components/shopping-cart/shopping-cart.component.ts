import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import ShoppingCartItem from '../../models/shopping-cart-item.model';
import {Store} from '@ngrx/store';
import {State} from '../../store/app.state';
import {RemoveShoppingCartItem} from '../../store/shoppingCartData/shopping-cart.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router, private store: Store<State>) {}

  cartItemsList$: Observable<ShoppingCartItem[]>; // ngrx variable
  isCartEmpty: boolean;

  ngOnInit() {
    this.cartItemsList$ = this.store.select( state => state.shoppingCartData.productList);

    this.store.select( state => state.shoppingCartData.productsTotal)
      .subscribe( value => this.isCartEmpty = (value === 0));
  }

  /**
   * Navigate to product catalog
   */
  returnToProductCatalog() {
    this.router.navigate(['/']);
  }

  /**
   * Remove shopping cart item by product it
   * @param {string} productId - id of product to be removed
   */
  removeItemFromCart(productId: string) {
    const item = new ShoppingCartItem();
    item.productId = productId;

    this.store.dispatch(new RemoveShoppingCartItem(item));
  }

}
