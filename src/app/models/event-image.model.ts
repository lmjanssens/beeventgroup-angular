import {Event} from './event.model';
import {BaseModel} from './base.model';

export class EventImage implements BaseModel {
  public id: number;
  public event: Event;
  public imagePath: string;

  constructor(id: number, event: Event, imagePath: string) {
    this.id = id;
    this.event = event;
    this.imagePath = imagePath;
  }
}
