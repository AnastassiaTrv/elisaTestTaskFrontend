import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IPrice} from '../../models/price.model';
import {Constants} from '../../app-constants';

@Injectable()
export class PriceService {

  private _priceUrl = Constants.PRICES_URL;
  constructor(private _http: HttpClient) { }

  /**
   * Get list of prices from API
   * @returns {Observable<IProduct[]>}
   */
  public getPrices(): Observable<IPrice[]> {
    return this._http.get<IPrice[]>(this._priceUrl);
  }
}
