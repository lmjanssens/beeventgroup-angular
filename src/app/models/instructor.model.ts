import {User} from './user.model';


export class Instructor {
  public instructor_id: number;
  public user_id: User;
  public first_name: string;
  public infix: string;
  public last_name: string;
  public phone_number: string;
  public email_address: string;
  public note: string;

  constructor(instructor_id: number, user_id: User, first_name: string, infix: string,
              last_name: string, phone_number: string, email_address: string, note: string) {
    this.instructor_id = instructor_id;
    this.user_id = user_id;
    this.first_name = first_name;
    this.infix = infix;
    this.last_name = last_name;
    this.phone_number = phone_number;
    this.email_address = email_address;
    this.note = note;
  }
}
