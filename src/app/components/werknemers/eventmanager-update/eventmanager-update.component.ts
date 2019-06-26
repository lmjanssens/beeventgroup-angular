import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Globals} from '../../globals';
import {NgForm} from '@angular/forms';
import {EmployeePhone} from '../../../models/employee-phone.model';
import {EmployeeService} from '../../../services/employee.service';
import {EmployeeEmail} from '../../../models/employee-email.model';

@Component({
  selector: 'app-eventmanager-update',
  templateUrl: './eventmanager-update.component.html',
  styleUrls: ['./eventmanager-update.component.css']
})
export class EventmanagerUpdateComponent implements OnInit {

  employee;
  tel = '';
  mail = '';
  newMail: EmployeeEmail = new EmployeeEmail();
  newPhone: EmployeePhone = new EmployeePhone();
  emailList: EmployeeEmail[] = [];
  phoneList: EmployeePhone[] = [];
  user = new User();
  private sub: any;
  currentId: number;

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute, private router: Router, private globals: Globals) {
  }

  onCreateMail() {
    if (this.employee.email_addresses.length < 4) {
      this.newMail = new EmployeeEmail();
      this.newMail.email = this.mail;
      this.employee.email_addresses.push(this.newMail);
      this.newMail = null;
    }
  }

  onCreateTel() {
    this.newPhone = new EmployeePhone();
    this.newPhone.phone = this.tel;
    this.employee.phone_numbers.push(this.newPhone);
    this.newPhone = null;
  }

  onDeleteMail(mail) {
    this.employee.email_addresses.splice(this.emailList.indexOf(mail), 1);
  }

  onDeleteTel(tel) {
    this.employee.phone_numbers.splice(this.phoneList.indexOf(tel), 1);
  }

  ngOnInit() {
    this.globals.setHuidigePagina('werknemerFormulier');
    this.employee = this.employeeService.getEmptyEmployee();

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.employeeId;
      this.employeeService.getById(this.currentId).subscribe(employee => {
        this.employee = employee;
      });
    });
  }

  ngSubmit(f: NgForm) {
    const data = JSON.parse(JSON.stringify(this.employee)) as any;
    this.employeeService.updateEmployee(data).subscribe(() => {
      this.router.navigate(['/homeeventmanager/werknemersoverview']);
    });
  }
}
