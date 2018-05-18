import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import ShoppingCartItem from '../../models/shopping-cart-item.model';
import {Store} from '@ngrx/store';
import {State} from '../../store/app.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router, private store: Store<State>) {}

  cartItems$: Observable<ShoppingCartItem[]>; // ngrx variable

  ngOnInit() {
    this.cartItems$ = this.store.select( state => state.shoppingCartData.productList);
  }


  /**
   * Navigate to product catalog
   */
  returnToProductCatalog() {
    this.router.navigate(['/catalog']);
  }

}
