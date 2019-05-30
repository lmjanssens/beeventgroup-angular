import {User} from './user.model';


export class Instructor {
  public id: number;
  public user: User;
  public firstName: string;
  public infix: string;
  public lastName: string;
  public phoneNumber: string;
  public email: string;

  constructor(id: number, user: User, firstName: string, infix: string, lastName: string, phoneNumber: string, email: string) {
    this.id = id;
    this.user = user;
    this.firstName = firstName;
    this.infix = infix;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
