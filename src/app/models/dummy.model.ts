export class DummyModel {
  public title: string;
  public date: string;
  public id: number;

  constructor(id: number, title: string, date: string) {
    this.id = id;
    this.date = date;
    this.title = title;

  }
}
