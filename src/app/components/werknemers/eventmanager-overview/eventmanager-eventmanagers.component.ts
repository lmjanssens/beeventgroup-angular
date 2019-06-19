import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../models/employee.model';
import {Globals} from '../../globals';
import {NavbarComponent} from '../../../navbar/navbar.component';
import {EmployeeService} from '../../../services/employee.service';
import {ApiService} from '../../../services/api.service';
import {AuthorizationService} from '../../../services/authorization.service';
import {Role} from '../../../enums/Role';

@Component({
  selector: 'app-eventmanager-eventmanagers',
  templateUrl: './eventmanager-eventmanagers.component.html',
  styleUrls: ['./eventmanager-eventmanagers.component.css']
})
export class EventmanagerEventmanagersComponent implements OnInit {
  public employeeList: Employee[] = [];
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;
  i = 0;
  employee: Employee;

  currentUser: any;
  authenticated = false;

  constructor(private globals: Globals, private navbar: NavbarComponent, private employeeService: EmployeeService, private authService: AuthorizationService, private apiService: ApiService) {
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
    this.employeeService.getAll().subscribe(customer => this.employeeList = this.sortByName(this.nullRemover(customer)));
  }

  sortByName(list) {
    list.sort((a, b) => (
      a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0)).sort((a, b) => (
      a.infix > b.infix ? 1 : b.infix > a.infix ? -1 : 0))
      .sort((a, b) => (
        a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0));
    return list;
  }

  onDelete(id, firstName, infix, lastName) {
    if (infix === '' || infix === undefined) {
      if (!confirm(`Wilt u de werknemer "${firstName + ' ' + lastName}" verwijderen ?`)) {
        return;
      }
    } else {
      if (!confirm(`Wilt u de werknemer "${firstName + ' ' + infix + ' ' + lastName}" verwijderen ?`)) {
        return;
      }
    }
    this.employeeService.delete(id).subscribe(() => {
      this.employeeService.getAll().subscribe(customer => this.employeeList = this.sortByName(this.nullRemover(customer)));
    });
  }

  getRoles() {
    return Role;
  }

}


