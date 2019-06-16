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
  customer: Customer = new Customer();
  tel = '';
  mail = '';
  newMail: CustomerEmail = new CustomerEmail();
  newPhone: CustomerPhone = new CustomerPhone();
  loading: true;
  currentId;
  private sub: any;
  selectedItem;
  selectTag;

  constructor(private globals: Globals, private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('klantenFormulier');

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params['customerId'];
      console.log(this.currentId);
      this.customerService.getById(this.currentId).subscribe(customer => {
        this.customer = customer;
        this.tel = this.customer.phone_numbers[0].phonenumber;
        this.mail = this.customer.email_addresses[0].email;

      });
    });
  }


  onCreateMail() {
    if (this.customer.email_addresses.length < 4) {
      this.newMail = new CustomerEmail();
      this.newMail.email = this.mail;
      this.customer.email_addresses.push(this.newMail);
      this.newMail = null;
    }
  }

  onCreateTel() {
    this.newPhone = new CustomerPhone();
    this.newPhone.phonenumber = this.tel;
    this.customer.phone_numbers.push(this.newPhone);
    this.newPhone = null;
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
  }

  ngSubmit(f: NgForm) {
    this.setGeslacht();

    const data = <any>JSON.parse(JSON.stringify(this.customer));
    this.customerService.updateCustomer(data).subscribe(() => {
      this.router.navigate(['/homeeventmanager/customeroverview']);
    });
  }

}
