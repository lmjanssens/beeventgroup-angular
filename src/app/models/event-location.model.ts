import {Event} from './event.model';
import {BaseModel} from './base.model';

export class EventLocation implements BaseModel {
  public id: number;
  public name: Event;
  public description: string;
  public routePicture: string;

  constructor(id: number, name: Event, description: string, routePicture: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.routePicture = routePicture;
  }
}
