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
    this.customerList = list;
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Klanten');
    this.navbar.checkNavBarStyle();
    console.log(this.globals.getHuidigePagina());
    this.customerService.getAll().subscribe(customer => this.nullRemover(customer));
    this.customerService.getAll().subscribe(customer => console.log(customer));
  }

}


