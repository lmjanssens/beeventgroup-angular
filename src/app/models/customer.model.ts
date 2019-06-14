import {CustomerEmail} from './customer-email.model';
import {CustomerOrder} from './customer-order.model';
import {CustomerPhone} from './customer-phone.model';
import {BaseModel} from './base.model';

export class Customer implements BaseModel {
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


  constructor(customerId: number, title: string, first_name: string, infix: string, last_name: string, address: string, zipcode: string, country: string, gender: string, city: string, email_addresses: CustomerEmail[], customer_orders: CustomerOrder[], phone_numbers: CustomerPhone[]) {
    this.id = customerId;
    this.title = title;
    this.first_name = first_name;
    this.infix = infix;
    this.last_name = last_name;
    this.address = address;
    this.zipcode = zipcode;
    this.country = country;
    this.gender = gender;
    this.city = city;
    this.email_addresses = email_addresses;
    this.customer_orders = customer_orders;
    this.phone_numbers = phone_numbers;
  }
}
