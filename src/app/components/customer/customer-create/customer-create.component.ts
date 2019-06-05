import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../models/customer.model';
import {CustomerEmail} from '../../../models/customer-email.model';
import {CustomerPhone} from '../../../models/customer-phone.model';
import {CustomerService} from '../../../services/customer.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  mail;
  tel;
  customer: Customer;
  newMail: CustomerEmail;
  newTel: CustomerPhone;

  mails: CustomerEmail[] = [];
  tels: CustomerPhone[] = [];

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit() {
    // this.customer = new Customer(6, '', 'Danny', 'van', 'Tol', 'Loliawa 6', '2314DD', 'Nederand', 'M', 'Schiphol', this.mails,
    //   null, this.tels);
    this.customer = new Customer();
    this.customer.emails = [];
    this.customer.phones = [];
  }

  onCreateMail() {
    // this.newMail = new CustomerEmail(6, this.customer, 'das');
    this.newMail = new CustomerEmail();
    this.mails.push(this.newMail);
    this.customer.emails = this.mails;
    if (this.mails.length > 7) {
      document.getElementById('addMail').style.visibility = 'hidden';
    }
    // console.log(this.newMail.email);
    // console.log(this.customer.emails);
  }

  onDeleteMail(mail) {
    this.customer.emails.splice(this.customer.emails.indexOf(mail), 1);
  }

  onCreateTel() {
    // this.newTel = new CustomerPhone(1, this.customer, '04128972');
    this.newTel = new CustomerPhone();
    this.customer.phones.push(this.newTel);
    this.customer.phones = this.tels;
    if (this.tels.length > 7) {
      document.getElementById('addTel').style.visibility = 'hidden';
    }
  }

  onDeleteTel(tel) {
    this.customer.phones.splice(this.customer.phones.indexOf(tel), 1);
  }

  ngSubmit(f: NgForm) {
    if (f.form.valid) {
      const data = <any>JSON.parse(JSON.stringify(this.customer));
      this.customerService.save(data).subscribe(() => {
        this.router.navigate(['/app/customers']);
      });
    } else {
      alert('Geen data ingebuld');
    }
  }

}
