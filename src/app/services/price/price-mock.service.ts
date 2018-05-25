import {Observable} from 'rxjs/Observable';
import {IPrice} from '../../models/price.model';
import 'rxjs/add/observable/of';

export const PRICES: IPrice[] = [{
    id: 1,
    recurringPrice: 2,
    oneTimePrice: 3,
    recurringCount: 4
}];

export class PriceMockService {

  public getPrices(): Observable<IPrice[]> {
    return Observable.of(PRICES);
  }

}
