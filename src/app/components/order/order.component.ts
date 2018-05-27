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

  // validation error variables
  companyNameError: string;
  streetError: string;
  postalCodeError: string;
  cityError: string;
  countryError: string;

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
    const self = this;
    this.orderService.sendOrder({...this.customer}, [...this.cartItemsList])
      .subscribe(result => this.onSuccessCallback (result, self), error => {
        this.isSending = false;
        this.toast.error('Order has not been submitted, an error occurred');
      });
  }


  /**
   * Clear form errors
   */
  cleanUpFormErrors() {
    this.companyNameError = null;
    this.streetError = null;
    this.countryError = null;
    this.cityError = null;
    this.postalCodeError = null;
  }


  /**
   * Callback function for processing response
   * @param {IOrderRequestResult} result
   * @context context object
   */
  onSuccessCallback(result: IOrderRequestResult, context) {
    if (result.success) {
      context.toast.success('Order successfully submitted');
      const self = this;

      // empty shopping cart data
      context.store.dispatch(new SetShoppingCartData(new ShoppingCartModel()));

      // clean uo form errors if present
      context.cleanUpFormErrors();

      // navigate to main page after short pause
      setTimeout(function () {
        self.router.navigate(['/']);
      }, 2000);

    } else {
      context.isSending = false;
      context.toast.error('Your order is invalid');

      if (result.errors) {
        context.companyNameError = result.errors.companyName;
        context.streetError = result.errors.street;
        context.countryError = result.errors.country;
        context.cityError = result.errors.city;
        context.postalCodeError = result.errors.postalCode;
      }
    }
  }


  /**
   * Synchronize productList from global state with local variable
   */
  subscribeToCartItemList() {
    this.store.select( state => state.shoppingCartData.productList)
      .subscribe( items  => this.cartItemsList = items);
  }

}
