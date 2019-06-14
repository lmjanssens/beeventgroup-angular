import {Customer} from '../../../models/customer.model';
import {CustomerEmail} from '../../../models/customer-email.model';
import {CustomerPhone} from '../../../models/customer-phone.model';
import {CustomerService} from '../../../services/customer.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {Globals} from '../../globals';
import {AlertsService} from 'angular-alert-module';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer: Customer;
  tel = '';
  mail = '';
  newMail: CustomerEmail = new CustomerEmail();
  newPhone: CustomerPhone = new CustomerPhone();
  selectTag;
  selectedItem;


  constructor(private globals: Globals,
              private customerService: CustomerService, private router: Router) {
  }


  ngOnInit() {
    this.globals.setHuidigePagina('klantenFormulier');
    this.customer = new Customer();
    this.customer.email_addresses = [];
    this.customer.phone_numbers = [];
    this.customer.customer_orders = [];
  }

  onCreateMail() {
    this.newMail = new CustomerEmail();
    this.newMail.email = this.mail;
    this.customer.email_addresses.push(this.newMail);
    console.log(this.customer.email_addresses);
    this.mail = '';

  }

  onDeleteMail(mail) {
    this.customer.email_addresses.splice(this.customer.email_addresses.indexOf(mail), 1);
  }

  onCreateTel() {
    this.newPhone = new CustomerPhone();
    this.newPhone.phonenumber = this.tel;
    this.customer.phone_numbers.push(this.newPhone);
    this.tel = '';
  }

  onDeleteTel(tel) {
    this.customer.phone_numbers.splice(this.customer.phone_numbers.indexOf(tel), 1);
  }

  setGeslacht() {
    this.selectTag = document.getElementById('geslacht');
    this.selectedItem = this.selectTag.options[this.selectTag.selectedIndex].value;
    this.customer.gender = this.selectedItem;
  }

  toevoegAlert() {
    if (this.customer.infix === undefined || this.customer.infix === '' || this.customer.infix === null) {
      alert('De klant ' + this.customer.first_name + ' ' + this.customer.last_name + ' is toegevoegd.');
    } else {
      alert('De klant ' + this.customer.first_name + ' ' + this.customer.infix + ' ' + this.customer.last_name + ' is toegevoegd.');
    }
  }

  ngSubmit(f: NgForm) {
    this.setGeslacht();
    this.newMail = new CustomerEmail();
    this.newMail.email = this.mail;
    this.customer.email_addresses.push(this.newMail);
    this.newPhone = new CustomerPhone();
    this.newPhone.phonenumber = this.tel;
    this.customer.phone_numbers.push(this.newPhone);
    const data = JSON.parse(JSON.stringify(this.customer)) as any;
    this.customerService.save(data).subscribe(() => {
      this.router.navigate(['/homeeventmanager/customeroverview']);
    });
    (document.getElementById('submit') as HTMLInputElement).disabled = true;
    this.toevoegAlert();

  }
}
