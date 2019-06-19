import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Globals} from '../../globals';
import {Employee} from '../../../models/employee.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-werknemers-details',
  templateUrl: './werknemers-details.component.html',
  styleUrls: ['./werknemers-details.component.css']
})
export class WerknemersDetailsComponent implements OnInit {
  private employee: Employee;
  private currentId: any;
  private sub: any;

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute, private router: Router, private globals: Globals, private location: Location) {
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
    if (this.employee.infix === '' || this.employee.infix === undefined || this.employee.infix === null) {
      if (!confirm(`Wilt u de werknemer "${this.employee.first_name + ' ' + this.employee.last_name}" verwijderen ?`)) {
        return;
      }
    } else {
      if (!confirm(`Wilt u de werknemer "${this.employee.first_name + ' ' +
      this.employee.infix + ' ' + this.employee.last_name}" verwijderen ?`)) {
        return;
      }
    }
    this.employeeService.delete(this.employee.employee_id).subscribe(() => {
      this.location.back();
    });
  }
}
