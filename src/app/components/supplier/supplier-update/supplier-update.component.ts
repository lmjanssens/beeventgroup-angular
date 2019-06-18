import {Component, OnInit} from '@angular/core';
import {SupplierService} from '../../../services/supplier.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Supplier} from '../../../models/supplier.model';
import {SupplierEmail} from '../../../models/supplier-email.model';
import {SupplierPhone} from '../../../models/supplier-phone.model';
import {NgForm} from '@angular/forms';
import {Globals} from '../../globals';
import {SupplierAddress} from '../../../models/supplier-address.model';

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrls: ['./supplier-update.component.css']
})
export class SupplierUpdateComponent implements OnInit {
  supplier: Supplier = new Supplier();
  tel = '';
  mail = '';
  zipcode = '';
  address = '';
  city = '';
  newMail: SupplierEmail = new SupplierEmail();
  newPhone: SupplierPhone = new SupplierPhone();
  newAddress: SupplierAddress = new SupplierAddress();
  emailList: SupplierEmail[] = [];
  phoneList: SupplierPhone[] = [];
  loading: true;
  currentId;
  private sub: any;
  selectedItem;
  selectTag;

  constructor(private globals: Globals, private supplierService: SupplierService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.supplierid;
      console.log(this.currentId);
      this.supplierService.getById(this.currentId).subscribe(supplier => {
        this.supplier = supplier;
        this.tel = this.supplier.phone_numbers[0].phone;
        this.mail = this.supplier.email_addresses[0].email;
        this.zipcode = this.supplier.addresses[0].zipcode;
        this.address = this.supplier.addresses[0].address;
        this.city = this.supplier.addresses[0].city;

      });
    });
  }

  onCreateMail() {
    this.newMail = new SupplierEmail();
    this.newMail.email = this.mail;
    this.supplier.email_addresses.push(this.newMail);
    this.newMail = null;

  }

  onCreateTel() {
    this.newPhone = new SupplierPhone();
    this.newPhone.phone = this.tel;
    this.supplier.phone_numbers.push(this.newPhone);
    this.newPhone = null;
  }

  onDeleteMail(mail) {
    this.supplier.email_addresses.splice(this.supplier.email_addresses.indexOf(mail), 1);
  }

  onDeleteTel(tel) {
    this.supplier.phone_numbers.splice(this.supplier.phone_numbers.indexOf(tel), 1);
  }


  onDeleteAddress(zipcode) {
    this.supplier.addresses.splice(this.supplier.addresses.indexOf(zipcode));
  }

  ngSubmit(f: NgForm) {
    this.onDeleteAddress(this.zipcode);
    this.newAddress = new SupplierAddress();
    this.newAddress.zipcode = this.zipcode;
    this.newAddress.address = this.address;
    this.newAddress.city = this.city;
    this.supplier.addresses.push(this.newAddress);
    const data = JSON.parse(JSON.stringify(this.supplier)) as any;
    this.supplierService.updateSupplier(data).subscribe(() => {
      this.router.navigate(['/homeeventmanager/supplieroverview']);
    });
  }
}

