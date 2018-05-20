import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import {Constants} from '../../app-constants';

@Injectable()
export class ProductsService {

  private _productUrl = Constants.PRODUCTS_URL;
  constructor(private _http: HttpClient) { }

  /**
   * Get list of product from API
   * @returns {Observable<IProduct[]>}
   */
  public getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl);
  }
}



