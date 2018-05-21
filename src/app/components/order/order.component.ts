import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../../services/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {}

  /**
   * Navigate to shopping cart
   */
  returnToShoppingCart() {
    this.router.navigate(['/shoppingCart']);
  }


  /**
   * Make order wiht items in the cart
   */
  makeOrder() {
    this.orderService.sentOrder();
  }

}
