import {BaseModel} from './base.model';

export class Supplier implements BaseModel {
  public id: number;
  public name: string;
  public contactPerson: string;
  public supervisor: string;
  public website: string;
  public note: string;
  public image: string;

  constructor(id: number, name: string, contactPerson: string, supervisor: string, website: string, note: string, image: string) {
    this.id = id;
    this.name = name;
    this.contactPerson = contactPerson;
    this.supervisor = supervisor;
    this.website = website;
    this.note = note;
    this.image = image;
  }
}
