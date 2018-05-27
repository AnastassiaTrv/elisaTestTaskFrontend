import {IOrderRequestResult} from '../../models/order-request-result.model';
import {Observable} from 'rxjs/Observable';

export class OrderMockService {

  private result: IOrderRequestResult = {
    customerId: 1,
    orderId: 1,
    addedCount: 2,
    success: true,
    errors: null
  };

  sendOrder(): Observable<IOrderRequestResult> {
    return Observable.of(this.result);
  }
}
