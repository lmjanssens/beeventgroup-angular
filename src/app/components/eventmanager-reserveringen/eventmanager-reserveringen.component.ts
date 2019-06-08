import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';

@Component({
  selector: 'app-eventmanager-reserveringen',
  templateUrl: './eventmanager-reserveringen.component.html',
  styleUrls: ['./eventmanager-reserveringen.component.css']
})
export class EventmanagerReserveringenComponent implements OnInit {
  public orderList: Order[] = [
    new Order(1, null, '1-1-1', '',
      '', '', '', null, null, null, null, null),
    new Order(2, null, '1-1-1', '',
      '', '', '', null, null, null, null, null),
    new Order(3, null, '1-1-1', '',
      '', '', '', null, null, null, null, null),
    new Order(4, null, '1-1-1', '',
      '', '', '', null, null, null, null, null),
    new Order(5, null, '1-1-1', '',
      '', '', '', null, null, null, null, null),
    new Order(6, null, '1-1-1', '',
      '', '', '', null, null, null, null, null)
  ];
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  amountRows = 0;
  searchTerm: string;
  emptyOrder: Order = new Order(null, null, '', '',
    '', '', '', null, null, null, null, null);


  constructor(private globals: Globals, private navbar: NavbarComponent) {
  }

  tableFiller() {
    if (this.orderList.length !== 0 && this.orderList.length % this.itemsPerPage !== 0) {
      this.rest = this.orderList.length % this.itemsPerPage;
      this.amountRows = this.itemsPerPage - this.rest;
      while (this.teller < this.amountRows) {
        this.orderList.push(this.emptyOrder);
        this.teller = this.teller + 1;
      }
      return this.orderList;
    } else {
      return this.orderList;
    }
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Reserveringen');
    this.navbar.checkNavBarStyle();
    console.log(this.globals.getHuidigePagina());
  }

}


