import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { ProductsService } from '../../services/product/products.service';
import { IProduct } from '../../models/product.model';
import { Observable } from 'rxjs/Observable';
import { PriceService } from '../../services/price/price.service';
import { IPrice } from '../../models/price.model';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  constructor(private productsService: ProductsService, private priceService: PriceService) {}

  productList: Observable<IProduct[]>;
  priceList: IPrice[];


  ngOnInit() {
    this.productList = this.productsService.getProducts();

    // subscribe manually because of logic in component
    this.priceService.getPrices().subscribe( value => this.priceList = value);
  }

  /**
   * Get price object from the list by price id provided.
   * @param priceId - price id to filter
   * @param productId - id of product (for logging purpose)
   * @returns price object or empty object (if nothing found or found more than one)
   */
  getProductPriceById(priceId, productId) {
    const filtered = this.priceList.filter( price => price.id === priceId);
    let result = {};

    if (filtered.length !== 1 && !environment.production) {
      console.warn(`unable to get price for product with id:  ${productId}`);

    } else {
      result = filtered[0];
    }

    return result;
  }
}
