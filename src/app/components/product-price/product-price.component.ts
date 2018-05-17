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
  selectedAmount: string; // used to render amount in drop down, default is 1

  ngOnInit() {
    this.currency = '$';
    this.selectedAmount = '1'; // default amount
    this.calculateTotalPrice(); // calculate total price when component initialized
  }


  /**
   * Calculate total price of product depending on amount and price info.
   * Emit new price calculation event to parent component.
   */
  calculateTotalPrice() {
    const amount = parseInt(this.selectedAmount, 10);
    const oneProductTotalPrice = this.priceInfo.oneTimePrice + this.priceInfo.recurringPrice * this.priceInfo.recurringCount;
    this.totalPrice = amount * oneProductTotalPrice;

    // emit event when new total price is calculated
    this.onTotalPriceCalculated.emit({
      amount: amount,
      totalPrice: this.totalPrice
    });
  }
}
