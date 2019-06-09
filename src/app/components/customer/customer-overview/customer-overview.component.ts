import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../models/customer.model';
import {Globals} from '../../globals';
import {NavbarComponent} from '../../../navbar/navbar.component';
import {CustomerService} from '../../../services/customer.service';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {
  public customerList: Customer[] = [];
  i = 0;
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;

  constructor(private globals: Globals, private navbar: NavbarComponent, private customerService: CustomerService) {
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
    this.customerService.getAll().subscribe(customer => this.customerList = this.nullRemover(customer.sort((a, b) => (
      a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0))).sort((a, b) => (
      a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0)));
  }

}


