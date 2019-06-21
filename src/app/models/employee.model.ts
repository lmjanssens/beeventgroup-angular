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


}
