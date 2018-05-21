import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../models/customer.model';
import {Store} from '@ngrx/store';
import {State} from '../../../store/app.state';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  customer$: Observable<Customer>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.customer$ = this.store.select(state => state.customerData);
  }

}
