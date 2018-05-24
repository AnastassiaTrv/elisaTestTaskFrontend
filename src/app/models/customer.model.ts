/**
 * This class represents customer data model
 */
export class Customer {
  name: string;
  email: string;
  customerId: number;
  companyName: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;

  constructor() {
    // test data for customer
    this.name = 'John Smith';
    this.email = 'john.smith@gmail.com';
    this.customerId = 123;
    this.companyName = 'Some company';
    this.street = 'Customers Street';
    this.postalCode = '7894';
    this.city = 'Tallinn';
    this.country = 'Estonia';
  }
}
