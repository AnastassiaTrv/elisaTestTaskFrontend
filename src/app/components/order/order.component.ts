import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../../services/order/order.service';
import {Customer} from '../../models/customer.model';
import {State} from '../../store/app.state';
import {Store} from '@ngrx/store';
import ShoppingCartItem from '../../models/shopping-cart-item.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router,
              private orderService: OrderService,
              private store: Store<State>) {

    this.subscribeToCartItemList();
  }

  customer: Customer;
  cartItemsList: ShoppingCartItem[]; // ngrx variable

  ngOnInit() {
    this.customer = new Customer();
  }

  /**
   * Navigate to shopping cart
   */
  returnToShoppingCart() {
    this.router.navigate(['/shoppingCart']);
  }


  /**
   * Make order with customer information and shopping cart items
   */
  makeOrder() {
    this.orderService.sendOrder({...this.customer}, [...this.cartItemsList]);
  }

  /**
   * Synchronize productList from global state with local variable
   */
  subscribeToCartItemList() {
    this.store.select( state => state.shoppingCartData.productList)
      .subscribe( items  => this.cartItemsList = items);
  }

}
