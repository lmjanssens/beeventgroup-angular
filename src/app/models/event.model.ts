import {Order} from './order.model';
import {EventImage} from './event-image.model';
import {EventLocation} from './event-location.model';
import {RegisteredEvents} from './registered-events.model';
import {Supplier} from './supplier.model';

export class Event {
  public id: number;
  public supplier: Supplier;
  public location: EventLocation;
  public order: Order;
  public registeredEvents: RegisteredEvents[];
  public eventImages: EventImage[];
  public ownEvent: boolean;
  public name: string;
  public description: string;
  public program: string;
  public duration: string;
  public options: string;
  public pricePerPerson: number;
  public priceBuyPerPerson: number;
  public btw: number;
  public note: string;

  constructor(id: number, supplier: Supplier, location: EventLocation, order: Order, registeredEvents: RegisteredEvents[],
              eventImages: EventImage[], ownEvent: boolean, name: string, description: string, program: string,
              duration: string, options: string, pricePerPerson: number, priceBuyPerPerson: number,
              btw: number, note: string) {

    this.id = id;
    this.supplier = supplier;
    this.location = location;
    this.order = order;
    this.registeredEvents = registeredEvents;
    this.eventImages = eventImages;
    this.ownEvent = ownEvent;
    this.name = name;
    this.description = description;
    this.program = program;
    this.duration = duration;
    this.options = options;
    this.pricePerPerson = pricePerPerson;
    this.priceBuyPerPerson = priceBuyPerPerson;
    this.btw = btw;
    this.note = note;
  }
}
