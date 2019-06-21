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
}
