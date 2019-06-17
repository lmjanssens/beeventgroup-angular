import {EventModel} from './event.model';
import {Instructor} from './instructor.model';

export class RegisteredEvents {
  public id: number;
  public event: EventModel;
  public instructor: Instructor;

  constructor(id: number, event: EventModel, instructor: Instructor) {
    this.id = id;
    this.event = event;
    this.instructor = instructor;
  }
}
