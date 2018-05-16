import {Component, Input, OnInit} from '@angular/core';

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

  // in case there are different currencies in the system
  currency: string;

  ngOnInit() {
    this.currency = '$';
  }
}
