import {IProduct} from '../../models/product.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export const PRODUCTS: IProduct[] = [{
    id: 'test id',
    priceId: 1,
    name: 'test product',
    description: 'test description'
  }];

export class ProductsMockService {

  public getProducts(): Observable<IProduct[]> {
    return Observable.of(PRODUCTS);
  }
}
