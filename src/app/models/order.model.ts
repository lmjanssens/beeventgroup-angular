import {Customer} from './customer.model';
import {Quotation} from './quotation.model';
import {Invoice} from './invoice.model';
import {Event} from './event.model';
import {CateringOrder} from './catering-order.model';


export class Order {
  public orderId: number;
  public customer: Customer;
  public dateorder: any;
  public dateevent: any;
  public note: string;
  public starttime: any;
  public endtime: any;
  public catering_orders: CateringOrder[];
  public invoices: Invoice;
  public events: Event;
  public quotations: Quotation[];

  constructor(orderId: number, customer: Customer, dateOrder: any, dateEvent: any, note: string,
              startTime: any, endTime: any, cateringsOrders: CateringOrder[], invoices: Invoice,
              events: Event, quotations: Quotation[]) {
    this.orderId = orderId;
    this.customer = customer;
    this.dateorder = dateOrder;
    this.dateevent = dateEvent;
    this.note = note;
    this.starttime = startTime;
    this.endtime = endTime;
    this.catering_orders = cateringsOrders;
    this.invoices = invoices;
    this.events = events;
    this.quotations = quotations;
  }
}
