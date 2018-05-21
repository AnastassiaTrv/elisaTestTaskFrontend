import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Constants} from '../../app-constants';

@Injectable()
export class OrderService {

  private _orderUrl = Constants.ORDERS_URl;

  constructor(private _http: HttpClient) {}

  /**
   * Submit order with customer and shopping cart items
   * @param customerInfo - order customer information
   * @param productList - order products
   * @returns {Observable<Object>}
   */
  sendOrder(customerInfo, productList) {
    const params = new HttpParams()
      .set('customerInfo', customerInfo)
      .set('productList', JSON.stringify(productList));

    // console.log('customerInfo: ' +  customerInfo);
    // console.log('productList: ' +  productList);
    return this._http.post(this._orderUrl, params);
  }
}
