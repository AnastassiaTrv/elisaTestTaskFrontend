import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// custom components
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent,
    ProductComponent,
    ShoppingCartComponent,
    HeaderComponent,
    UserInfoComponent,
    ProductPriceComponent,
    ProductDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      // reducers here
    }),
    StoreDevtoolsModule.instrument(),
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
