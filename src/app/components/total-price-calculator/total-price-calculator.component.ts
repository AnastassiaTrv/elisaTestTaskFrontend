import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-total-price-calculator',
  templateUrl: './total-price-calculator.component.html',
  styleUrls: ['./total-price-calculator.component.css']
})
export class TotalPriceCalculatorComponent implements OnInit {

  constructor() { }

  // used to render quantity in drop down
  selectedQuantity: number;
  totalPrice: number;

  @Input() oneTimePrice: number;
  @Input() recurrentPrice: number;
  @Input() recurrentCount: number;
  @Input() currency: string;

  @Output() onTotalPriceCalculated = new EventEmitter();

  ngOnInit() {
    // default quantity
    this.selectedQuantity = 1;

    // calculate total price based on default selected quantity
    this.calculateTotalPrice();
  }

  /**
   * Calculate total price of product depending on quantity and price info
   */
  calculateTotalPrice() {
    const oneProductTotalPrice = this.oneTimePrice + this.recurrentCount * this.recurrentPrice;
    this.totalPrice = this.selectedQuantity * oneProductTotalPrice;

    // emit event when new total price is calculated
    this.onTotalPriceCalculated.emit({
      quantity: this.selectedQuantity,
      totalPrice: this.totalPrice
    });
  }

}
