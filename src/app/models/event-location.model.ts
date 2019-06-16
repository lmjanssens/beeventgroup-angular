import {BaseModel} from './base.model';

export class EventLocation implements BaseModel {
  public id: number;
  public name: string;
  public description: string;
  public routePicture: string;

  // constructor(supplierid: number, name: EventModel, description: string, routePicture: string) {
  //   this.supplierid = supplierid;
  //   this.name = name;
  //   this.description = description;
  //   this.routePicture = routePicture;
  // }
}
