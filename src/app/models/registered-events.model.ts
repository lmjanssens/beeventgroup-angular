import {Event} from './event.model';

export class RegisteredEvents {
  public id: number;
  public event: Event;
  public instructor: Instructor;

  constructor(id: number, event: Event, instructor: Instructor) {
    this.id = id;
    this.event = event;
    this.instructor = instructor;
  }
}
