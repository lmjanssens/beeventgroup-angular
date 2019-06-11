import {EventModel} from './event.model';
import {BaseModel} from './base.model';

export class EventImage implements BaseModel {
  public id: number;
  public event: EventModel;
  public imagePath: string;

  constructor(id: number, event: EventModel, imagePath: string) {
    this.id = id;
    this.event = event;
    this.imagePath = imagePath;
  }
}
