import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  constructor() {}

  // price object provided from parent element
  @Input() priceInfo;
  @Input() showPriceCalculator;

  @Output() onTotalPriceCalculated = new EventEmitter();

  currency: string;       // in case there are different currencies in the system
  totalPrice: number;
  selectedQuantity: string; // used to render quantity in drop down, default is 1

  ngOnInit() {
    this.currency = '$';
    this.selectedQuantity = '1'; // default quantity
    this.calculateTotalPrice(); // calculate total price when component initialized
  }


  /**
   * Calculate total price of product depending on quantity and price info.
   * Emit new price calculation event to parent component.
   */
  calculateTotalPrice() {
    const quantity = parseInt(this.selectedQuantity, 10);
    const oneProductTotalPrice = this.priceInfo.oneTimePrice + this.priceInfo.recurringPrice * this.priceInfo.recurringCount;
    this.totalPrice = quantity * oneProductTotalPrice;

    // emit event when new total price is calculated
    this.onTotalPriceCalculated.emit({
      quantity: quantity,
      totalPrice: this.totalPrice
    });
  }
}
