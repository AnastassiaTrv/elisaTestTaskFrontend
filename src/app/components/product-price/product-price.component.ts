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
  selectedAmount: number; // used to render amount in drop down
  totalPrice: number;

  ngOnInit() {
    this.currency = '$';
    this.selectedAmount = 1; // default amount
    this.calculateTotalPrice(); // calculate total price when component initialized
  }


  /**
   * Calculate total price of product depending on amount and price info
   */
  calculateTotalPrice() {
    const oneProductTotalPrice = this.priceInfo.oneTimePrice + this.priceInfo.recurringPrice * this.priceInfo.recurringCount;
    this.totalPrice = this.selectedAmount * oneProductTotalPrice;

    // emit event when new total price is calculated
    this.onTotalPriceCalculated.emit({
      amount: this.selectedAmount,
      totalPrice: this.totalPrice
    });
  }
}
