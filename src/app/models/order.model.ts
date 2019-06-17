import {Customer} from './customer.model';
import {Quotation} from './quotation.model';
import {Invoice} from './invoice.model';
import {EventModel} from './event.model';
import {CateringOrder} from './catering-order.model';


export class Order {
  public orderId: number;
  public customer: Customer;
  public dateorder: any;
  public dateevent: any;
  public note: string;
  public startTime: any;
  public endTime: any;
  public maxInstructors: number;
  public cateringsOrders: CateringOrder[];
  public invoices: Invoice[];
  public events: EventModel[];
  public quotations: Quotation[];

  constructor(orderId: number, customer: Customer, dateOrder: any, dateEvent: any, note: string,
              startTime: any, endTime: any, cateringsOrders: CateringOrder[], invoices: Invoice[],
              events: EventModel[], quotations: Quotation[]) {
    this.orderId = orderId;
    this.customer = customer;
    this.dateorder = dateOrder;
    this.dateevent = dateEvent;
    this.note = note;
    this.startTime = startTime;
    this.endTime = endTime;
    this.cateringsOrders = cateringsOrders;
    this.invoices = invoices;
    this.events = events;
    this.quotations = quotations;
  }
}
