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

  //   new Customer(1, '', 'Mark', '', 'Bueno', 'Kakalaan 12', '2314DD', 'Aruba', 'V', 'Den Haag', null,
  //     null, null),
  //   new Customer(2, '', 'Joost', 'de', 'Winter', 'Dolinchistraat 69', '2314DC', 'Nederand', 'M', 'Haarlem', null,
  //     null, null),
  //   new Customer(3, '', 'Bashar', '', 'Farah', 'Burakisanka 44', '2314DD', 'Nederand', 'O', 'Hoofddorp', null,
  //     null, null),
  //   new Customer(4, '', 'Luuk', '', 'Janssens', 'Patinchikito 2', '2314DC', 'Nederand', 'M', 'Nootdorp', null,
  //     null, null),
  //   new Customer(5, '', 'Robin', '', 'Silverio', 'Dolodenbocul 5', '3314DD', 'Nederand', 'M', 'Schiphol', null,
  //     null, null),
  //   new Customer(6, '', 'Danny', 'van', 'Tol', 'Loliawa 6', '2314DD', 'Nederand', 'M', 'Schiphol', null,
  //     null, null)
  // ];
  // rest: number;
  // firstPage = 1;
  // itemsPerPage = 5;
  // teller = 0;
  // amountRows = 0;
  // searchTerm: string;
  // emptyCustomer: Customer = new Customer(null, '', '', '', '', '', '', '', '', '', null,
  //   null, null);

  constructor(private globals: Globals, private navbar: NavbarComponent, private customerService: CustomerService) {
  }

  tableFiller() {
    // if (this.customerList.length !== 0 && this.customerList.length % this.itemsPerPage !== 0) {
    //   this.rest = this.customerList.length % this.itemsPerPage;
    //   this.amountRows = this.itemsPerPage - this.rest;
    //   while (this.teller < this.amountRows) {
    //     this.customerList.push(this.emptyCustomer);
    //     this.teller = this.teller + 1;
    //   }
    //   return this.customerList;
    // } else {
    //   return this.customerList;
    // }
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
   this.customerService.getAll().subscribe(customer => this.nullRemover(customer));
    this.customerService.getAll().subscribe(customer => console.log(customer));
  }

}


