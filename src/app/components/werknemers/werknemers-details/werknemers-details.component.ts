import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Globals} from '../../globals';
import {Employee} from '../../../models/employee.model';
import {Location} from '@angular/common';
import {AuthorizationService} from '../../../services/authorization.service';
import {Role} from '../../../enums/Role';

@Component({
  selector: 'app-werknemers-details',
  templateUrl: './werknemers-details.component.html',
  styleUrls: ['./werknemers-details.component.css']
})
export class WerknemersDetailsComponent implements OnInit {
  private employee: Employee;
  private currentId: any;
  private sub: any;
  currentUser: any;
  authenticated = false;

  constructor(private employeeService: EmployeeService, private authService: AuthorizationService,
              private route: ActivatedRoute, private router: Router, private globals: Globals, private location: Location) {
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
  ngOnInit() {
    this.globals.setHuidigePagina('werknemerFormulier');

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.employeeId;
      console.log(this.currentId);
      this.employeeService.getById(this.currentId).subscribe(employee => {
        this.employee = employee;
      });
    });
  }


  onDelete() {
    if (!confirm(`Wilt u de werknemer "${this.employee.first_name + ' ' + this.employee.last_name}" verwijderen ?`)) {
      return;
    }
    this.employeeService.delete(this.currentId).subscribe(() => {
      this.location.back();
    });
  }
  getRoles() {
    return Role;
  }
}
