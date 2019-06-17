import {Component, Injectable, OnInit} from '@angular/core';
import {Customer} from '../../../models/customer.model';
import {Globals} from '../../globals';
import {NavbarComponent} from '../../../navbar/navbar.component';
import {CustomerService} from '../../../services/customer.service';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../../services/authorization.service';
import {Role} from '../../../enums/Role';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
@Injectable()
export class CustomerOverviewComponent implements OnInit {
  public customerList: Customer[] = [];
  i = 0;
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;
  customer: Customer;

  currentUser: any;
  authenticated = false;

  constructor(private globals: Globals,
              private navbar: NavbarComponent,
              private router: Router,
              private customerService: CustomerService,
              private authService: AuthorizationService) {

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

  nullRemover(list) {
    while (this.i < list.length) {
      if (list[this.i].infix === null) {
        list[this.i].infix = '';
      }
      this.i = this.i + 1;
    }
    return list;
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Klanten');
    this.navbar.checkNavBarStyle();
    this.customerService.getAll().subscribe(customer => this.customerList = this.sortByName(this.nullRemover(customer)));
  }

  sortByName(list) {
    list.sort((a, b) => (
      a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0)).sort((a, b) => (
      a.infix > b.infix ? 1 : b.infix > a.infix ? -1 : 0))
      .sort((a, b) => (
        a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0));
    return list;
  }

  onDelete(id, lastName, firstName) {
    if (!confirm(`Wilt u de klant "${firstName + ' ' + lastName}" verwijderen ?`)) {
      return;
    }
    this.customerService.delete(id).subscribe(() => {
      this.customerService.getAll().subscribe(customer => this.customerList = this.sortByName(this.nullRemover(customer)));
    });
  }

  getRoles() {
    return Role;
  }

}


