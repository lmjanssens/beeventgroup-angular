import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../models/employee.model';
import {Globals} from '../../globals';
import {EmployeeService} from '../../../services/employee.service';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {EmployeePhone} from '../../../models/employee-phone.model';
import {EmployeeEmail} from '../../../models/employee-email.model';

@Component({
  selector: 'app-eventmanager-create',
  templateUrl: './eventmanager-create.component.html',
  styleUrls: ['./eventmanager-create.component.css']
})
export class EventmanagerCreateComponent implements OnInit {

  password1: string;
  password2: string;
  employee: Employee = new Employee();
  user: User = new User();

  phones: EmployeePhone[] = [];
  emails: EmployeeEmail [] = [];
  tel = '';
  mail = '';

  newMail: EmployeeEmail;
  newPhone: EmployeePhone;

  constructor(private globals: Globals, private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('klantenFormulier');
  }

  ngSubmit(f: NgForm) {
    this.newMail = new EmployeeEmail();
    this.newPhone = new EmployeePhone();

    this.newPhone.phone = this.tel;
    this.phones.push(this.newPhone);
    this.employee.phone_numbers = this.phones;

    this.newMail.email = this.mail;
    this.emails.push(this.newMail);
    this.employee.email_addresses = this.emails;


    if (this.password1 === this.password2) {

      this.employee.user_id = this.user;
      this.user.password = this.password1;
      const data = JSON.parse(JSON.stringify(this.employee)) as any;
      this.employeeService.save(data).subscribe(() => {
        setTimeout(() => {
          this.router.navigate(['/homeeventmanager/werknemersoverview']
          );
        }, 1000);
      });
    } else {
      alert('De wachtwoorden komen niet overeen');
    }
  }


}
