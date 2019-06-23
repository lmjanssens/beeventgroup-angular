import {Component, OnInit} from '@angular/core';
import {Supplier} from '../../../models/supplier.model';
import {Globals} from '../../globals';
import {NavbarComponent} from '../../../navbar/navbar.component';
import {SupplierService} from '../../../services/supplier.service';
import {AuthorizationService} from '../../../services/authorization.service';
import {Role} from '../../../enums/Role';

@Component({
  selector: 'app-supplier-overview',
  templateUrl: './supplier-overview.component.html',
  styleUrls: ['./supplier-overview.component.css']
})

export class SupplierOverviewComponent implements OnInit {
  public supplierList: Supplier[] = [];
  i = 0;
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;

  currentUser: any;
  authenticated = false;

  constructor(private globals: Globals, private navbar: NavbarComponent,
              private authService: AuthorizationService, private  supplierService: SupplierService) {
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
    this.globals.setHuidigePagina('Leveranciers');
    this.navbar.checkNavBarStyle();
    this.supplierService.getAll().subscribe(supplier => {
      this.supplierList = this.sortByName(supplier);
      console.log(supplier);
    });
  }

  sortByName(list) {
    list.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return list;
  }

  onDelete(supplierid, name) {
    if (!confirm(`Wilt u de leverancier "${name}" verwijderen ?`)) {
      return;
    }
    this.supplierService.delete(supplierid).subscribe(() => {
      console.log('Supplier with supplierid ' + supplierid + ' is deleted.');
      this.supplierService.getAll().subscribe(supplier => this.supplierList = this.sortByName(supplier));
    });
  }

  test(a) {
    console.log('TEST' + a);
  }

  getRoles() {
    return Role;
  }

}
