import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

// custom components
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInfoComponent } from './components/header/user-info/user-info.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { TotalPriceCalculatorComponent } from './components/total-price-calculator/total-price-calculator.component';

// reducers
import {shoppingCartReducer} from './store/shoppingCartData/shopping-cart.reducer';
import { CartInfoComponent } from './components/header/cart-info/cart-info.component';

// custom services
import {ProductsService} from './services/product/products.service';
import {PriceService} from './services/price/price.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent,
    ProductComponent,
    ShoppingCartComponent,
    HeaderComponent,
    UserInfoComponent,
    ProductPriceComponent,
    ProductDialogComponent,
    TotalPriceCalculatorComponent,
    CartInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      shoppingCartData: shoppingCartReducer
    }),
    StoreDevtoolsModule.instrument(),
    NgbModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [ProductsService, PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
