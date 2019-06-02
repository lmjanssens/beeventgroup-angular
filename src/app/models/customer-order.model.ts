import {Customer} from './customer.model';
import {Order} from './order.model';

export class CustomerOrder {
  public customerOrderId: number;
  public order: Order;
  public customer: Customer;

  constructor(customerOrderId: number, order: Order, customer: Customer) {
    this.customerOrderId = customerOrderId;
    this.customer = customer;
    this.order = order;

  }
}
