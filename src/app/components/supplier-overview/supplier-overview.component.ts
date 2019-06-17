import {Component, OnInit} from '@angular/core';
import {Supplier} from '../../models/supplier.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {AuthorizationService} from "../../services/authorization.service";
import {Role} from "../../enums/Role";

@Component({
  selector: 'app-supplier-overview',
  templateUrl: './supplier-overview.component.html',
  styleUrls: ['./supplier-overview.component.css']
})

export class SupplierOverviewComponent implements OnInit {
  public supplierList: Supplier[] = [
    new Supplier(1, 'a.BV', 'Mark', 'A', 'Bueno.nl', 'Kakalaan 12', null),
    new Supplier(2, 'b.BV', 'Joost', 'B', 'Winter.nl', 'Dolinchistraat 69', null),
    new Supplier(3, 'c.BV', 'Bashar', 'C', 'Farah.nl', 'Burakisanka 44', null),
    new Supplier(4, 'd.BV', 'Luuk', 'D', 'Janssens.nl', 'Patinchikito 2', null),
    new Supplier(5, 'e.NV', 'Robin', 'E', 'Silverio.nl', 'Dolodenbocul 5', null),
    new  Supplier(6, 'f.NV', 'Danny', 'F', 'Tol.nl', 'Loliawa 6', null)
  ];
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  amountRows = 0;
  searchTerm: string;
  emptySupplier: Supplier = new Supplier(null, '', '', '', '', '', '');

  currentUser: any;
  authenticated = false;

  constructor(private globals: Globals, private navbar: NavbarComponent, private authService: AuthorizationService) {
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

  tableFiller() {
    if (this.supplierList.length !== 0 && this.supplierList.length % this.itemsPerPage !== 0) {
      this.rest = this.supplierList.length % this.itemsPerPage;
      this.amountRows = this.itemsPerPage - this.rest;
      while (this.teller < this.amountRows) {
        this.supplierList.push(this.emptySupplier);
        this.teller = this.teller + 1;
      }
      return this.supplierList;
    } else {
      return this.supplierList;
    }
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Leveranciers');
    this.navbar.checkNavBarStyle()
    console.log(this.globals.getHuidigePagina());
  }

  getRoles() {
    return Role;
  }

}
