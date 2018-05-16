import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() {
    this.userName = 'John Smith';
    this.userEmail = 'john.smith@gmail.com';
  }

  userName: string;
  userEmail: string;

  ngOnInit() {
  }

}
