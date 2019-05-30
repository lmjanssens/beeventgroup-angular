import {Customer} from './customer.model';

export class CustomerPhone {
  public id: number;
  public customer: Customer;
  public phone: string;

  constructor(id: number, customer: Customer, phone: string) {
    this.id = id;
    this.customer = customer;
    this.phone = phone;

  }
}
