import {CustomerEmail} from './customer-email.model';
import {CustomerOrder} from './customer-order.model';
import {CustomerPhone} from './customer-phone.model';

export class Customer {
  public customerId: number;
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


}
