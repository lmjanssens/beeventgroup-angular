import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employee.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {EmployeeService} from '../../services/employee.service';
import {ApiService} from '../../services/api.service';

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

  constructor(private globals: Globals, private navbar: NavbarComponent, private employeeService: EmployeeService, private apiService: ApiService) {

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
    if (!confirm(`Wilt u de werknemer "${firstName + ' ' + lastName}" verwijderen ?`)) {
      return;
    }
    this.employeeService.delete(id).subscribe(() => {
      console.log('Employee with id ' + id + ' is deleted.');
      this.employeeService.getAll().subscribe(employee => this.employeeList = this.nullRemover(employee.sort((a, b) => (
        a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0))).sort((a, b) => (
        a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0)));
    });
  }


}


