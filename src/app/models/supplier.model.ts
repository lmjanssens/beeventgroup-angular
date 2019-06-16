export class Supplier {
  public supplierid: number;
  public name: string;
  public contact_person: string;
  public supervisor: string;
  public website: string;
  public note: string;
  public image: string;

  constructor(id: number, name: string, contactPerson: string, supervisor: string, website: string, note: string, image: string) {
    this.supplierid = id;
    this.name = name;
    this.contact_person = contactPerson;
    this.supervisor = supervisor;
    this.website = website;
    this.note = note;
    this.image = image;
  }
}
