import {Component, OnInit} from '@angular/core';
import {Globals} from '../../globals';
import {NavbarComponent} from '../../../navbar/navbar.component';
import {SupplierService} from '../../../services/supplier.service';
import {AuthorizationService} from '../../../services/authorization.service';
import {Role} from '../../../enums/Role';
import {SupplierContract} from '../../../models/supplier-contract.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Supplier} from "../../../models/supplier.model";

@Component({
  selector: 'app-supplier-contract-overview',
  templateUrl: './supplier-contract-overview.component.html',
  styleUrls: ['./supplier-contract-overview.component.css']
})
export class SupplierContractOverviewComponent implements OnInit {
  supplier: Supplier;
  i = 0;
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;
  currentId: number;
  currentUser: any;
  contracts: SupplierContract[] = [];
  authenticated = false;
  sub: any;
  constructor(private globals: Globals, private navbar: NavbarComponent,
              private authService: AuthorizationService, private  supplierService: SupplierService, private route: ActivatedRoute) {
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
    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.supplierid;
      this.supplierService.getById(this.currentId).subscribe(supplier => {
        this.supplier = supplier;
        this.contracts = this.supplier.contracts
        console.log(this.supplier.contracts[0].title);
      });
    });
    this.globals.setHuidigePagina('Leveranciers');
    this.navbar.checkNavBarStyle();
  }

  onDelete(contractid) {
    if (!confirm(`Wilt u het contract verwijderen ?`)) {
      return;
    }
    this.supplierService.delete(contractid).subscribe(() => {
      console.log('contract with contractid ' + contractid + ' is deleted.');
      this.supplierService.getAll().subscribe(supplierContract => this.contracts);
    });
  }

  test(a) {
    console.log('TEST' + a);
  }

  getRoles() {
    return Role;
  }

}
