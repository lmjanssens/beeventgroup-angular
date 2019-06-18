import {Component, OnInit} from '@angular/core';
import {Supplier} from '../../../models/supplier.model';
import {SupplierEmail} from '../../../models/supplier-email.model';
import {SupplierPhone} from '../../../models/supplier-phone.model';
import {SupplierAddress} from '../../../models/supplier-address.model';
import {Globals} from '../../globals';
import {SupplierService} from '../../../services/supplier.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
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
  currentId;
  private sub: any;

  constructor(private globals: Globals, private supplierService: SupplierService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('leverancierFormulier');
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


}
