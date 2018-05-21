/**
 * This class represents customer data model
 */
export class Customer {
  name: string;
  email: string;
  customerId: number;
  companyname: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;

  constructor() {
    // test data for customer
    this.name = 'John Smith';
    this.email = 'john.smith@gmail.com';
    this.customerId = 123;
    this.companyname = 'Some company';
    this.street = 'Customers Street';
    this.postalCode = '789456 abc';
    this.city = 'Tallinn';
    this.country = 'Estonia';
  }
}
