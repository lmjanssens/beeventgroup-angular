import {Customer} from './customer.model';
import {Quotation} from './quotation.model';
import {EventModel} from './event.model';
import {CateringOrder} from './catering-order.model';
import {RegisteredEvents} from './registered-events.model';


export class Order {
  public orderId: number;
  public customer: Customer;
  public dateorder: any;
  public dateevent: any;
  public note: string;
  public startTime: any;
  public endTime: any;
  public persons: number;
  public cateringOrders: CateringOrder[];
  public event: EventModel;
  public quotations: Quotation[];
  public registeredEvents: RegisteredEvents[];

  constructor(orderId: number, customer: Customer, dateOrder: any, dateEvent: any, note: string,
              startTime: any, endTime: any, cateringOrders: CateringOrder[], persons: number,
              events: EventModel, quotations: Quotation[]) {
    this.orderId = orderId;
    this.customer = customer;
    this.dateorder = dateOrder;
    this.dateevent = dateEvent;
    this.note = note;
    this.startTime = startTime;
    this.endTime = endTime;
    this.cateringOrders = cateringOrders;
    this.event = events;
    this.quotations = quotations;
    this.persons = persons;
  }
}
