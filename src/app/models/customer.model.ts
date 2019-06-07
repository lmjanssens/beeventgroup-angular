import {CustomerEmail} from './customer-email.model';
import {CustomerOrder} from './customer-order.model';
import {CustomerPhone} from './customer-phone.model';

export class Customer {
  public id: number;
  public title: string;
  public first_name: string;
  public infix: string;
  public last_name: string;
  public address: string;
  public zipcode: string;
  public country: string;
  public gender: string;
  public city: string;
  public email_addresses: CustomerEmail[];
  public customer_orders: CustomerOrder[];
  public phone_numbers: CustomerPhone[];

  // constructor(id: number, title: string, firstName: string, infix: string, lastName: string,
  //             address: string, zipcode: string, country: string, gender: string, city: string,
  //             emails: CustomerEmail[], customerOrders: CustomerOrder[], phones: CustomerPhone[]) {
  //   this.id = id;
  //   this.title = title;
  //   this.firstName = firstName;
  //   this.infix = infix;
  //   this.lastName = lastName;
  //   this.address = address;
  //   this.zipcode = zipcode;
  //   this.country = country;
  //   this.gender = gender;
  //   this.city = city;
  //   this.emails = emails;
  //   this.customerOrders = customerOrders;
  //   this.phones = phones;

  // }
}
