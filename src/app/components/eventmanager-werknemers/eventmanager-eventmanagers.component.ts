import {Component, OnInit} from '@angular/core';
import {Customer} from '../../models/customer.model';
import {Employee} from '../../models/employee.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {EmployeeService} from '../../services/employee.service';
import {AuthorizationService} from "../../services/authorization.service";
import {Role} from "../../enums/Role";

@Component({
  selector: 'app-eventmanager-eventmanagers',
  templateUrl: './eventmanager-eventmanagers.component.html',
  styleUrls: ['./eventmanager-eventmanagers.component.css']
})
export class EventmanagerEventmanagersComponent implements OnInit {

  // public employeeList: Employee[] = [
  //   new Employee(1, null, 'Derick', '', 'Peters', null, null),
  //   new Employee(2, null, 'Jon', '', 'Jones', null, null),
  //   new Employee(3, null, 'Jon', '', 'Jhonson', null, null),
  //   new Employee(4, null, 'Peter', '', 'Jhonson', null, null),
  //   new Employee(5, null, 'Richard', '', 'Jhonson', null, null),
  //   new Employee(6, null, 'Richard', '', 'Pizzaman', null, null),
  // ];
  public employeeList: Employee[] = [];
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  amountRows = 0;
  searchTerm: string;
  i = 0;
  employee: Employee;
  emptyEmployee: Employee = new Employee(null, null, '', '', '', null, null);

  currentUser: any;
  authenticated = false;

  constructor(private globals: Globals, private navbar: NavbarComponent, private employeeService: EmployeeService, private authService: AuthorizationService) {
    this.authenticated = this.authService.hasAuthorization();

    this.authService.authorized$.subscribe(
      authorized => {
        this.updateAuthentication();
      }
    );

    this.updateAuthentication();
  }

  updateAuthentication() {
    this.authenticated = this.authService.hasAuthorization();

    if (!this.authenticated) {
      this.currentUser = {};
      return;
    }

    this.currentUser = this.authService.getAuthenticator();
  }


  nullRemover(list) {
    while (this.i < list.length) {
      if (list[this.i].infix === null) {
        list[this.i].infix = '';
      }
      this.i = this.i + 1;
    }
    return list;
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Werknemers');
    this.navbar.checkNavBarStyle();
    this.employeeService.getAll().subscribe(employee => this.employeeList = this.nullRemover(employee.sort((a, b) => (
      a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0))).sort((a, b) => (
      a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0)));
  }

  onDelete(id, firstName, lastName) {
    // if (!confirm(`Wilt u de werknemer "${firstName + ' ' + lastName}" verwijderen ?`)) {
    //   return;
    // }
    // this.employeeService.delete(id).subscribe(() => {
    //   console.log('Employee with id ' + id + ' is deleted.');
    //   this.employeeService.getAll().subscribe(employee => this.employeeList = this.nullRemover(employee.sort((a, b) => (
    //     a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0))).sort((a, b) => (
    //     a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0)));
    // });
  }

  getRoles() {
    return Role;
  }

}


