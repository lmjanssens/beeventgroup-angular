import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../models/customer.model';
import {CustomerEmail} from '../../../models/customer-email.model';
import {CustomerPhone} from '../../../models/customer-phone.model';
import {NgForm} from '@angular/forms';
import {Globals} from '../../globals';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;
  tel = '';
  mail = '';
  newMail: CustomerEmail = new CustomerEmail();
  newPhone: CustomerPhone = new CustomerPhone();
  loading: true;
  currentId;
  private sub: any;
  selectedItem;
  selectTag;
  private updatedCustomer = false;

  constructor(private globals: Globals, private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.setGeslacht();
    this.globals.setHuidigePagina('klantenFormulier');
    this.customer = new Customer(null, '', '', '', '',
      '', '', '', '', '', null, null, null);
    this.customer.first_name = '';
    this.customer.last_name = '';
    this.customer.zipcode = '';
    this.customer.city = '';
    this.customer.gender = '';
    this.customer.country = '';
    this.customer.address = '';
    this.customer.infix = '';
    this.customer.title = '';
    this.customer.email_addresses = [];
    this.customer.phone_numbers = [];
    this.customer.customer_orders = [];

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params['customerId'];
      console.log(this.currentId);
      this.customerService.getById(this.currentId).subscribe(customer => {
        this.customer = customer;
        this.updatedCustomer = true;
      });
    });
  }

  onCreateMail() {
    this.newMail = new CustomerEmail();
    this.newMail.email = this.mail;
    this.customer.email_addresses.push(this.newMail);
  }

  onCreateTel() {
    this.newPhone = new CustomerPhone();
    this.newPhone.phonenumber = this.tel;
    this.customer.phone_numbers.push(this.newPhone);
  }

  onDeleteMail(mail) {
    this.customer.email_addresses.splice(this.customer.email_addresses.indexOf(mail), 1);
  }

  onDeleteTel(tel) {
    this.customer.phone_numbers.splice(this.customer.phone_numbers.indexOf(tel), 1);
  }

  setGeslacht() {
    this.selectTag = document.getElementById('geslacht');
    this.selectedItem = this.selectTag.options[this.selectTag.selectedIndex].value;
    // this.customer.gender = this.selectedItem;
    console.log(this.selectedItem);
  }

  ngSubmit(f: NgForm) {
    if (f.form.valid) {
      const data = <any>JSON.parse(JSON.stringify(this.customer));
      this.customerService.updateCustomer(data).subscribe(() => {
        this.router.navigate(['/homeeventmanager/customeroverview']);
      });
    } else {
      alert('geen data ingevuld');
    }
  }
}
