import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialogComponent } from './product-dialog.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastModule} from 'ng2-toastr';
import {shoppingCartReducer} from '../../store/shoppingCartData/shopping-cart.reducer';
import {PRODUCTS} from '../../services/product/products-mock.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ProductDialogComponent', () => {
  let component: ProductDialogComponent;
  let fixture: ComponentFixture<ProductDialogComponent>;
  let elemNative: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDialogComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        StoreModule.forRoot({
          shoppingCartData: shoppingCartReducer
        }),
        NgbModule.forRoot(),
        ToastModule.forRoot(),
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDialogComponent);
    elemNative = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;

    component.productName = PRODUCTS[0].name;
    component.productId = PRODUCTS[0].id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
