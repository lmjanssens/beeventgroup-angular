import {Event} from './event.model';

export class EventImage {
  public id: number;
  public event: Event;
  public imagePath: string;

  constructor(id: number, event: Event, imagePath: string) {
    this.id = id;
    this.event = event;
    this.imagePath = imagePath;
  }
}
