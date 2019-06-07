import {Customer} from '../../../models/customer.model';
import {CustomerEmail} from '../../../models/customer-email.model';
import {CustomerPhone} from '../../../models/customer-phone.model';
import {CustomerService} from '../../../services/customer.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {Globals} from '../../globals';
import {NavbarComponent} from '../../../navbar/navbar.component';
import {AlertsService} from 'angular-alert-module';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer: Customer;
  tel;
  mail;
  newMail: CustomerEmail = new CustomerEmail();
  newPhone: CustomerPhone = new CustomerPhone();

  mails: CustomerEmail[] = [];
  tels: CustomerPhone[] = [];

  constructor(private globals: Globals, private navbar: NavbarComponent, private customerService: CustomerService, private router: Router) {
  }


  ngOnInit() {

    this.customer = new Customer();
    this.customer.email_addresses = [];
    this.customer.phone_numbers = [];
    this.customer.customer_orders = [];
  }

  onCreateMail() {
    this.newMail = new CustomerEmail();
    this.newMail.email = this.mail;
    this.customer.email_addresses.push(this.newMail);
    if (this.customer.email_addresses.length > 7) {
      document.getElementById('addMail').style.visibility = 'hidden';
    }
    this.mail = null;
    console.log(this.mail);

  }

  onDeleteMail(mail) {
    this.customer.email_addresses.splice(this.customer.email_addresses.indexOf(mail), 1);
  }

  onCreateTel() {
    this.newPhone = new CustomerPhone();
    this.newPhone.phonenumber = this.tel;
    this.customer.phone_numbers.push(this.newPhone);
    if (this.customer.phone_numbers.length > 7) {
      document.getElementById('addTel').style.visibility = 'hidden';
    }
    this.tel = null;
  }

  onDeleteTel(tel) {
    this.customer.phone_numbers.splice(this.customer.phone_numbers.indexOf(tel), 1);
  }

  ngSubmit(f: NgForm) {
    if (f.form.valid) {
      const data = <any> JSON.parse(JSON.stringify(this.customer));
      this.customerService.save(data).subscribe(() => {
        this.router.navigate(['/homeeventmanager/customeroverview']);

      });
      this.alertService.setMessage('De klant ' + this.customer.first_name + ' ' + this.customer.last_name + ' is toegevoegd.', 'success');
    } else {
      this.alertService.setMessage('Vul de belangrijke velden in.', 'error');

    }
  }

}
