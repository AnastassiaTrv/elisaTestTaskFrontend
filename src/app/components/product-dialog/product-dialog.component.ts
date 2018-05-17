import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';
import {State} from '../../store/app.state';
import ShoppingCartItem from '../../models/shopping-cart-item.model';
import {AddShoppingCartItem, SetShoppingCartData} from '../../store/shoppingCartData/shopping-cart.action';


@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDialogComponent implements OnInit {

  @Input() productName: string;
  @Input() priceInfo: object;

  closeResult: string;
  shoppingCartItem: ShoppingCartItem;

  constructor(private modalService: NgbModal, private store: Store<State>) {}

  ngOnInit() {
    const item = new ShoppingCartItem();
    item.name = this.productName;
    this.shoppingCartItem = item;
  }


  /**
   * Open product dialog with informatio
   * @param content - html template of dialog
   */
  openDialog(content) {
    this.modalService.open(content, {
      centered: true,
      // backdropClass: 'light-blue-backdrop'
    });
  }


  /**
   * Build new shopping cart item;
   * @param data
   */
  onTotalPriceChanged(data) {
    this.shoppingCartItem.amount = data.amount;
    this.shoppingCartItem.totalPrice = data.totalPrice;
  }

  addProductToShoppingCart() {
    console.log('adding item to shopping cart');
    this.store.dispatch(new AddShoppingCartItem(this.shoppingCartItem));
  }
}
