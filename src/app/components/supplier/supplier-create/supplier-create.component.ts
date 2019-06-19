import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {Supplier} from '../../../models/supplier.model';
import {SupplierEmail} from '../../../models/supplier-email.model';
import {SupplierAddress} from '../../../models/supplier-address.model';
import {SupplierPhone} from '../../../models/supplier-phone.model';
import {Globals} from '../../globals';
import {SupplierService} from '../../../services/supplier.service';


@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent implements OnInit {

  supplier: Supplier;
  tel = '';
  mail = '';
  address = '';
  zipcode = '';
  city = '';
  newMail: SupplierEmail = new SupplierEmail();
  newPhone: SupplierPhone = new SupplierPhone();
  newAddress: SupplierAddress = new SupplierAddress();

  constructor(private globals: Globals, private supplierService: SupplierService, private router: Router) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('leverancierFormulier');
    this.supplier = new Supplier();
    this.supplier.email_addresses = [];
    this.supplier.phone_numbers = [];
    this.supplier.addresses = [];
    this.supplier.contracts = [];
  }

  onCreateMail() {
    this.newMail = new SupplierEmail();
    this.newMail.email = this.mail;
    this.supplier.email_addresses.push(this.newMail);
    console.log(this.supplier.email_addresses);
    this.mail = '';
  }

  onDeleteMail(mail) {
    this.supplier.email_addresses.splice(this.supplier.email_addresses.indexOf(mail), 1);
  }

  onCreateTel() {
    this.newPhone = new SupplierPhone();
    this.newPhone.phone = this.tel;
    this.supplier.phone_numbers.push(this.newPhone);
    this.tel = '';
  }

  onDeleteTel(tel) {
    this.supplier.phone_numbers.splice(this.supplier.phone_numbers.indexOf(tel), 1);
  }

  toevoegAlert() {
    alert('De leverancier ' + this.supplier.name + ' is toegevoegd.');
  }

  ngSubmit(f: NgForm) {
    this.newMail = new SupplierEmail();
    this.newAddress = new SupplierAddress();
    this.newAddress.address = this.address;
    this.newAddress.city = this.city;
    this.newAddress.zipcode = this.zipcode;
    this.supplier.addresses.push(this.newAddress);
    this.newMail.email = this.mail;
    this.supplier.email_addresses.push(this.newMail);
    this.newPhone = new SupplierPhone();
    this.newPhone.phone = this.tel;
    this.supplier.phone_numbers.push(this.newPhone);
    const data = JSON.parse(JSON.stringify(this.supplier)) as any;
    this.supplierService.save(data).subscribe(() => {
      this.router.navigate(['/homeeventmanager/supplieroverview']
      );
    });
    (document.getElementById('submit') as HTMLInputElement).disabled = true;
    this.toevoegAlert();

  }
}

