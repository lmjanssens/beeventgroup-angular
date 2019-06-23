import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../models/employee.model';
import {Globals} from '../../globals';
import {EmployeeService} from '../../../services/employee.service';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {EmployeePhone} from '../../../models/employee-phone.model';
import {EmployeeEmail} from '../../../models/employee-email.model';
import {UserService} from '../../../services/user.service';

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
  private teller = 0;
  private userNameAvailable = true;

  constructor(private globals: Globals, private employeeService: EmployeeService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('werknemerFormulier');
  }

  userNameChecker(list) {
    while (this.teller < list.length) {
      if (this.user.username === list[this.teller].username) {
        this.userNameAvailable = false;
      }
      this.teller = this.teller + 1;
    }
    return list;
  }

  toevoegAlert() {
    if (this.employee.infix === undefined || this.employee.infix === '' || this.employee.infix === null) {
      alert('De werknemer ' + this.employee.first_name + ' ' + this.employee.last_name + ' is toegevoegd.');
    } else {
      alert('De werknemer ' + this.employee.first_name + ' ' +
        this.employee.infix + ' ' + this.employee.last_name + ' is toegevoegd.');
    }
  }

  passwordChecker() {
    if (this.password1 === this.password2) {
      this.employee.user_id = this.user;
      this.user.password = this.password1;
    } else {
      alert('Wachtwoord komen niet overeen');
      return false;
    }
    return true;
  }


  ngSubmit(f: NgForm) {
    if (this.passwordChecker()) {
      this.newMail = new EmployeeEmail();
      this.newPhone = new EmployeePhone();

      this.newPhone.phone = this.tel;
      this.phones.push(this.newPhone);
      this.employee.phone_numbers = this.phones;

      this.newMail.email = this.mail;
      this.emails.push(this.newMail);
      this.employee.email_addresses = this.emails;
      this.user.password = this.password1;
      const data = JSON.parse(JSON.stringify(this.employee)) as any;
      this.userService.getAllUsers().subscribe(users => {
        this.userNameChecker(users);
        if (this.userNameAvailable === false) {
          alert('Deze gebruikersnaam is niet beschikbaar');
          this.userNameAvailable = true;
          this.teller = 0;
        } else {
          this.employeeService.save(data).subscribe(() => {
            this.toevoegAlert();
            this.router.navigate(['/homeeventmanager/werknemersoverview']
            );
          });
        }
      });
    }
  }
}
