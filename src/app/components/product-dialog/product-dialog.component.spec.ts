import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialogComponent } from './product-dialog.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastModule} from 'ng2-toastr';
import {shoppingCartReducer} from '../../store/shoppingCartData/shopping-cart.reducer';

describe('ProductDialogComponent', () => {
  let component: ProductDialogComponent;
  let fixture: ComponentFixture<ProductDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDialogComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        StoreModule.forRoot({
          shoppingCartData: shoppingCartReducer
        }),
        NgbModule.forRoot(),
        ToastModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
