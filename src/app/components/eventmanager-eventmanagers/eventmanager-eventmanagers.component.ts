import {Component, OnInit} from '@angular/core';
import {Customer} from '../../models/customer.model';
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-eventmanager-eventmanagers',
  templateUrl: './eventmanager-eventmanagers.component.html',
  styleUrls: ['./eventmanager-eventmanagers.component.css']
})
export class EventmanagerEventmanagersComponent implements OnInit {

  public employeeList: Employee[] = [
    new Employee(1, null, 'Derick', '', 'Peters', null, null),
    new Employee(2, null, 'Jon', '', 'Jones', null, null),
    new Employee(3, null, 'Jon', '', 'Jhonson', null, null),
    new Employee(4, null, 'Peter', '', 'Jhonson', null, null),
    new Employee(5, null, 'Richard', '', 'Jhonson', null, null),
    new Employee(5, null, 'Richard', '', 'Pizzaman', null, null),
  ];
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  amountRows = 0;
  searchTerm: string;
  emptyEmployee: Employee = new Employee(null, null, '', '', '', null, null);

  constructor() {
  }

  tableFiller() {
    if (this.employeeList.length !== 0 && this.employeeList.length % this.itemsPerPage !== 0) {
      this.rest = this.employeeList.length % this.itemsPerPage;
      this.amountRows = this.itemsPerPage - this.rest;
      while (this.teller < this.amountRows) {
        this.employeeList.push(this.emptyEmployee);
        this.teller = this.teller + 1;
      }
      return this.employeeList;
    } else {
      return this.employeeList;
    }
  }

  ngOnInit() {
  }

}


