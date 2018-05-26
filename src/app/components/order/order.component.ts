import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../../services/order/order.service';
import {Customer} from '../../models/customer.model';
import {State} from '../../store/app.state';
import {Store} from '@ngrx/store';
import ShoppingCartItem from '../../models/shopping-cart-item.model';
import {ToastsManager} from 'ng2-toastr';
import {SetShoppingCartData} from '../../store/shoppingCartData/shopping-cart.action';
import ShoppingCartModel from '../../models/shopping-cart.model';
import {IOrderRequestResult} from '../../models/order-request-result.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  customer: Customer;
  cartItemsList: ShoppingCartItem[]; // ngrx variable
  isSending: boolean; // if request is in progress

  constructor(private router: Router,
              private orderService: OrderService,
              private store: Store<State>,
              private toast: ToastsManager,
              vcr: ViewContainerRef) {

    this.toast.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.subscribeToCartItemList();
    this.customer = new Customer();
    this.isSending = false;
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
    this.isSending = true;
    this.orderService.sendOrder({...this.customer}, [...this.cartItemsList])
      .subscribe(result => {
        if (result.success) {
          this.toast.success('Order successfully submitted');
          const self = this;

          // empty shopping cart data
          this.store.dispatch(new SetShoppingCartData(new ShoppingCartModel()));

          // navigate to main page after short pause
          setTimeout(function () {
            self.router.navigate(['/']);
          }, 2000);

        } else {
          this.isSending = false;
          this.toast.error('Your order is invalid');
        }
      }, error => {
        this.isSending = false;
        this.toast.error('Order has not been submitted, an error occurred');
      });
  }


  /**
   * Callback function for processing response
   * @param {IOrderRequestResult} result
   */
  onSuccessCallback(result: IOrderRequestResult) {
    if (result.success) {
      this.toast.success('Order successfully submitted');
      const self = this;

      // empty shopping cart data
      this.store.dispatch(new SetShoppingCartData(new ShoppingCartModel()));

      // navigate to main page after short pause
      setTimeout(function () {
        self.router.navigate(['/']);
      }, 2000);

    } else {
      this.isSending = false;
      this.toast.error('Your order is invalid');
    }

  }


  /**
   * Callback function for processing error
   */
  orErrorCallback(context) {
    context.isSending = false;
    context.toast.error('Order has not been submitted, an error occurred');
  }


  /**
   * Synchronize productList from global state with local variable
   */
  subscribeToCartItemList() {
    this.store.select( state => state.shoppingCartData.productList)
      .subscribe( items  => this.cartItemsList = items);
  }

}
