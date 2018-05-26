import {Observable} from 'rxjs/Observable';
import {IPrice} from '../../models/price.model';
import 'rxjs/add/observable/of';

export const PRICES: IPrice[] = [{
    id: 1,
    recurringPrice: 10,
    oneTimePrice: 30,
    recurringCount: 5
  },
  {
    id: 2,
    recurringPrice: 20,
    oneTimePrice: 40,
    recurringCount: 8
  }];

export class PriceMockService {

  public getPrices(): Observable<IPrice[]> {
    return Observable.of(PRICES);
  }

}
