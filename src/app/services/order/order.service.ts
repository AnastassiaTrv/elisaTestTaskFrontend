import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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
    const order = {
      // orderId: 7,
      customer: {
        customerId: 1
      },
      orderLines: this.getOrderLines(productList)
    };

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    this._http.post(this._orderUrl, order, {headers: headers}).subscribe( result => {
      console.log(result);
    });
  }


  /**
   * Copy productList and delete unnecessary properties, that do not need to be transferred to api
   * @param productList - list of shopping cart items to process
   */
  getOrderLines(productList) {
    const orderLines = [...productList];

    orderLines.forEach( product => {
      product.totalPrice = undefined;
      product.index = undefined;
    });

    return orderLines;
  }
}
