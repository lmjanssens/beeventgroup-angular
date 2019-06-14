import {Component, OnInit} from '@angular/core';
import {SupplierService} from '../../services/supplier.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Supplier} from '../../models/supplier.model';
import {SupplierEmail} from '../../models/supplier-email.model';
import {SupplierPhone} from '../../models/supplier-phone.model';
import {NgForm} from '@angular/forms';
import {Globals} from '../globals';

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrls: ['./supplier-update.component.css']
})
export class SupplierUpdateComponent implements OnInit {
  supplier: Supplier = new Supplier();
  tel = '';
  mail = '';
  newMail: SupplierEmail = new SupplierEmail();
  newPhone: SupplierPhone = new SupplierPhone();
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
      });
    });
    console.log(this.supplier.email_addresses);

  }

  onCreateMail() {
    this.newMail = new SupplierEmail();
    this.newMail.email = this.mail;
    this.supplier.email_addresses.push(this.newMail);
  }

  onCreateTel() {
    this.newPhone = new SupplierPhone();
    this.newPhone.phone = this.tel;
    this.supplier.phone_numbers.push(this.newPhone);
  }

  onDeleteMail(mail) {
    this.supplier.email_addresses.splice(this.supplier.email_addresses.indexOf(mail), 1);
  }

  onDeleteTel(tel) {
    this.supplier.phone_numbers.splice(this.supplier.phone_numbers.indexOf(tel), 1);
  }

  ngSubmit(f: NgForm) {
    this.newMail = new SupplierEmail();
    this.newMail.email = this.mail;
    this.supplier.email_addresses.push(this.newMail);
    this.newPhone = new SupplierPhone();
    this.newPhone.phone = this.tel;
    this.supplier.phone_numbers.push(this.newPhone);
    const data = JSON.parse(JSON.stringify(this.supplier)) as any;
    this.supplierService.updateSupplier(data).subscribe(() => {
      this.router.navigate(['/homeeventmanager/supplieroverview']);
    });
  }
}

