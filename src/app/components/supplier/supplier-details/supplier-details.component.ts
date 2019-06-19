import {Component, OnInit} from '@angular/core';
import {Supplier} from '../../../models/supplier.model';
import {Globals} from '../../globals';
import {SupplierService} from '../../../services/supplier.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Role} from '../../../enums/Role';
import {AuthorizationService} from '../../../services/authorization.service';

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
  currentId;
  private sub: any;
  authenticated = false;
  currentUser: any;


  constructor(private globals: Globals, private supplierService: SupplierService, private authService: AuthorizationService,
              private route: ActivatedRoute, private router: Router, private location: Location) {
    this.authenticated = this.authService.hasAuthorization();
    this.authService.authorized$.subscribe(
      authorized => {
        this.updateAuthentication();
      }
    );

    this.updateAuthentication();
  }

  updateAuthentication() {
    this.authenticated = this.authService.hasAuthorization();

    if (!this.authenticated) {
      this.currentUser = {};
      return;
    }

    this.currentUser = this.authService.getAuthenticator();
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

  onDelete() {
    if (!confirm(`Wilt u de leverancier "${this.supplier.name}" verwijderen ?`)) {
      return;
    }
    this.supplierService.delete(this.currentId).subscribe(() => {
      this.location.back();
    });
  }

  getRoles() {
    return Role;
  }
}
