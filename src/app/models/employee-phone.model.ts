import {Employee} from './employee.model';

export class EmployeePhone {
  public id: number;
  public employee: Employee;
  public email: string;


  constructor(id: number, employee: Employee, email: string) {
    this.id = id;
    this.employee = employee;
    this.email = email;
  }
}
