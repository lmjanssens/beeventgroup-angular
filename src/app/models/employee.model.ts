import {User} from './user.model';
import {EmployeeEmail} from './employee-email.model';
import {EmployeePhone} from './employee-phone.model';


export class Employee {
  public employee_id: number;
  public user_id: User;
  public first_name: string;
  public infix: string;
  public last_name: string;
  public email_addresses: EmployeeEmail[];
  public phone_numbers: EmployeePhone[];
  public note: string;


  constructor(employee_id: number, user_id: User, first_name: string, infix: string, last_name: string,
              email_addresses: EmployeeEmail[], phone_numbers: EmployeePhone[], note: string) {
    this.employee_id = employee_id;
    this.user_id = user_id;
    this.first_name = first_name;
    this.infix = infix;
    this.last_name = last_name;
    this.email_addresses = email_addresses;
    this.phone_numbers = phone_numbers;
    this.note = note;
  }
}
