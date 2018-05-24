import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Constants} from '../../app-constants';
import {IOrderRequestResult} from '../../models/order-request-result.model';
import {Observable} from 'rxjs/Observable';

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
  sendOrder(customerInfo, productList): Observable<IOrderRequestResult> {

    const order = {
      customer: this.getCustomer(customerInfo),
      orderLines: this.getOrderLines(productList)
    };

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this._http.post<IOrderRequestResult>(this._orderUrl, order, {headers: headers});
  }


  /**
   * Delete unnecessary properties from product, that do not need to be transferred to api
   * @param productList - list of shopping cart items to process
   */
  getOrderLines(productList) {
    productList.forEach( product => {
      product.totalPrice = undefined;
      product.index = undefined;
    });

    return productList;
  }


  /**
   * Delete unnecessary properties from customer, that do not need to be transferred to api
   * @param customerInfo
   */
  getCustomer(customerInfo) {
    customerInfo.email = undefined;
    customerInfo.name = undefined;
    return customerInfo;
  }
}
