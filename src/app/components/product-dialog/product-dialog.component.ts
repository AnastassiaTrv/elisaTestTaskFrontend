import {Component, Input, OnInit, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';
import {State} from '../../store/app.state';
import ShoppingCartItem from '../../models/shopping-cart-item.model';
import {AddShoppingCartItem} from '../../store/shoppingCartData/shopping-cart.action';
import {Toast, ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDialogComponent implements OnInit {

  @Input() productName: string;
  @Input() productId: string;
  @Input() priceInfo: object;

  closeResult: string;
  modalReference: any; // reference to current modal object
  shoppingCartItem: ShoppingCartItem;

  constructor(private modalService: NgbModal, private store: Store<State>, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }


  ngOnInit() {
    this.createDefaultShoppingCartItem();
  }


  /**
   * Instantiate shopping cart item model for further work withing current modal
   */
  createDefaultShoppingCartItem() {
    const item = new ShoppingCartItem();
    item.productName = this.productName;
    item.productId = this.productId;

    this.shoppingCartItem = item;
  }


  /**
   * Open product dialog with information
   * @param content - html template of dialog
   */
  openDialog(content) {
    this.modalReference = this.modalService.open(content, { centered: true });

    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  /**
   * Build new shopping cart item;
   * @param data
   */
  onTotalPriceChanged(data) {
    this.shoppingCartItem.quantity = data.quantity;
    this.shoppingCartItem.totalPrice = data.totalPrice;
  }


  /**
   * Add new product to shopping cart global store and close the dialog
   */
  addProductToShoppingCart() {
    const item = {...this.shoppingCartItem};
    this.store.dispatch(new AddShoppingCartItem(item));
    this.showSuccessNotification();
    this.closeDialog();
  }


  /**
   * Close modal using its reference
   */
  closeDialog() {
    this.modalReference.close();
  }


  showSuccessNotification() {
    this.toastr.success('Product(s) has been successfully added to your shopping cart');
  }
}
