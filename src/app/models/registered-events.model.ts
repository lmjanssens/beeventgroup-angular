import {EventModel} from './event.model';
import {Instructor} from './instructor.model';
import {Order} from "./order.model";

export class RegisteredEvents {
  public id: number;
  public order: Order;
  public event: EventModel;
  public instructor: Instructor;

  constructor(id: number, order: Order, event: EventModel, instructor: Instructor) {
    this.id = id;
    this.order = order;
    this.event = event;
    this.instructor = instructor;
  }
}
