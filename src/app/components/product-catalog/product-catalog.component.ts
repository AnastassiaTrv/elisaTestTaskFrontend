import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment.prod';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  constructor() { }

  productList: any;
  priceList: any;

  // used to render rows in catalog
  rowsArray: Array<number>;
  productsCountPerRow = 3;


  ngOnInit() {

    // toDo: fetch from http request
    this.productList = [
      { id: 'f3DFS234#212dfS',
        priceId: 1,
        name: 'Nokia Lumia 1020 - Blue',
        description: 'Monster camera version of the famous Windows Phone.'
      },
      {
        id: 's345664lkdLDSDf',
        priceId: 5,
        name: 'Samsung Galaxy 4',
        description: 'Not the latest and not the greatest Samsung Galaxy. But it is on sale! Not the latest and not the greatest Samsung Galaxy. But it is on sale!'
      },
      {
        id: 'm873LDFkDF%#DSd',
        priceId: 1,
        name: 'Nokia Lumia 1020 - White',
        description: 'Monster camera version of the famous Windows Phone.'
      }];

    // toDo: fetch from http request
    this.priceList = [
      {
        id: 1,
        recurringPrice: 12.99,
        oneTimePrice: 50.0,
        recurringCount: 24
      },
      {
        id: 5,
        recurringPrice: 22.351223,
        oneTimePrice: 50.1233125,
        recurringCount: 12
      }];


    this.setRowsArray();
  }


  /**
   * Get price object from the list by price id provided.
   * @param priceId - price id to filter
   * @param productId - id of product (for logging purpose)
   * @returns price object or empty object (if nothing found or found more than one)
   */
  getProductPriceById(priceId, productId) {
    const filtered = this.priceList.filter( price => price.id === priceId);
    let result = {};

    if (filtered.length !== 1 && !environment.production) {

      console.warn(`unable to get price for product with id:  ${productId}`);

    } else {
      result = filtered[0];
    }

    return result;
  }


  /**
   * Calculate number of rows in product catalog according to products count per one row.
   * Round a number upward to its nearest integer.
   */
  setRowsArray() {
    const numberOfRows = Math.ceil(this.productList.length / this.productsCountPerRow);
    this.rowsArray = new Array(numberOfRows);
  }
}
