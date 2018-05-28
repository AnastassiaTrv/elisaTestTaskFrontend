import {Observable} from 'rxjs/Observable';
import {IPrice} from '../../models/price.model';
import 'rxjs/add/observable/of';
import * as bigdecimal from 'bigdecimal/lib/bigdecimal';

// processed price
export const PRICES_PROCESSED: IPrice[] = [{
    id: 1,
    recurringPrice: new bigdecimal.BigDecimal(10.00),
    oneTimePrice: new bigdecimal.BigDecimal(30.00),
    recurringCount: 5
  },
  {
    id: 2,
    recurringPrice: new bigdecimal.BigDecimal(20.00),
    oneTimePrice: new bigdecimal.BigDecimal(40.00),
    recurringCount: 8
  }];


export const PRICES: IPrice[] = [{
  id: 1,
  recurringPrice: 10.99,
  oneTimePrice: 30.99,
  recurringCount: 5
},
  {
    id: 2,
    recurringPrice: 20.99,
    oneTimePrice: 40.99,
    recurringCount: 8
  }];

export class PriceMockService {

  public getPrices(): Observable<IPrice[]> {
    return Observable.of(PRICES);
  }

}
