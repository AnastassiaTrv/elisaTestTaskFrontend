import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {State} from '../../store/app.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {

  constructor(private store: Store<State>, private router: Router) {}

  cartItemsCount$: Observable<number>; // ngrx variable

  ngOnInit() {
    this.cartItemsCount$ = this.store.select( state => state.shoppingCartData.productsTotal);
  }

  /**
   * Navigate to shopping cart view
   */
  openShoppingCart() {
    this.router.navigate(['/shoppingCart']);
  }

}
