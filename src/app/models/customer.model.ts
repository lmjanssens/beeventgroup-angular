import {CustomerEmail} from './customer-email.model';
import {CustomerOrder} from './customer-order.model';
import {CustomerPhone} from './customer-phone.model';

export class Customer {
  public id: number;
  public title: string;
  public firstName: string;
  public infix: string;
  public lastName: string;
  public address: string;
  public zipcode: string;
  public country: string;
  public gender: string;
  public city: string;
  public emails: CustomerEmail[];
  public customerOrders: CustomerOrder[];
  public phones: CustomerPhone[];

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
