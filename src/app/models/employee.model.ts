import {User} from './user.model';
import {EmployeeEmail} from './employee-email.model';
import {EmployeePhone} from './employee-phone.model';


export class Employee {
  public id: number;
  public user: User;
  public firstName: string;
  public infix: string;
  public lastName: string;
  public emails: EmployeeEmail[];
  public phones: EmployeePhone[];


  constructor(id: number, user: User, firstName: string, infix: string, lastName: string, emails: EmployeeEmail[], phones: EmployeePhone[]) {
    this.id = id;
    this.user = user;
    this.firstName = firstName;
    this.infix = infix;
    this.lastName = lastName;
    this.emails = emails;
    this.phones = phones;
  }
}
