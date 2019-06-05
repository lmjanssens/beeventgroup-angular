import {Component, OnInit } from '@angular/core';
import {Catering} from '../../models/catering.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';

@Component({
  selector: 'app-catering-overview',
  templateUrl: './catering-overview.component.html',
  styleUrls: ['./catering-overview.component.css']
})
export class CateringOverviewComponent implements OnInit {
  public cateringList: Catering[] = [
    new Catering(1, null, null, 'A', 'Bueno', '1234 tk', 'astraat', 'Bentveld', null, 11.00, null),
    new Catering(2, null, null, 'B', 'Winter', '6964 tj', 'bstraat', 'Haarlem', null, 12.00, null),
    new Catering(3, null, null, 'C', 'Farah', '4476 hk', 'cstraat', 'Hoofddorp', null, 13.00, null),
    new Catering(4, null, null, 'D', 'Janssens', '5422 vl', 'dstraat', 'Leiden', null, 14.00, null),
    new Catering(5, null, null, 'E', 'Silverio', '9485 ka', 'estraat', 'Den haag', null, 15.00, null),
    new  Catering(6, null, null, 'F', 'Tol', '5466 lh', 'fstraat', 'Amsterdam', null, 16.00, null)
  ];
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  amountRows = 0;
  searchTerm: string;
  emptyCatering: Catering = new Catering(null, null, null, '', '', '', '', '', '', null, '');

  constructor(private globals: Globals, private navbar: NavbarComponent) {
  }

  tableFiller() {
    if (this.cateringList.length !== 0 && this.cateringList.length % this.itemsPerPage !== 0) {
      this.rest = this.cateringList.length % this.itemsPerPage;
      this.amountRows = this.itemsPerPage - this.rest;
      while (this.teller < this.amountRows) {
        this.cateringList.push(this.emptyCatering);
        this.teller = this.teller + 1;
      }
      return this.cateringList;
    } else {
      return this.cateringList;
    }
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Horeca');
    this.navbar.checkNavBarStyle()
    console.log(this.globals.getHuidigePagina());
  }

}
