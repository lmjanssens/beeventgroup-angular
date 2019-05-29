import {Component, OnInit} from '@angular/core';
import {DummyModel} from '../../models/dummy.model';

@Component({
  selector: 'app-eventmanager-reserveringen',
  templateUrl: './eventmanager-reserveringen.component.html',
  styleUrls: ['./eventmanager-reserveringen.component.css']
})
export class EventmanagerReserveringenComponent implements OnInit {
  public dummylist: DummyModel[] = [
    new DummyModel(1, 'lol', '323'),
    new DummyModel(2, 'lol', '323'),
    new DummyModel(3, 'lol', '323'),
    new DummyModel(4, 'lol', '323'),
    new DummyModel(5, 'lol', '323'),
    new DummyModel(6, 'lol', '323'),
    new DummyModel(7, 'lol', '323'),
    new DummyModel(8, 'lol', '323'),
    new DummyModel(9, 'lol', '323'),
    new DummyModel(10, 'lol', '323'),
    new DummyModel(11, 'lol', '323'),
    new DummyModel(12, 'lol', '323'),
    new DummyModel(13, 'lol', '323'),
    new DummyModel(14, 'lol', '323'),
  ];
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  public amountRows = 0;
  legeDummy: DummyModel = new DummyModel(null, '', '');


  constructor() {
  }

  tableFiller() {
    if (this.dummylist.length !== 0 && this.dummylist.length % this.itemsPerPage !== 0) {
      this.rest = this.dummylist.length % this.itemsPerPage;
      this.amountRows = this.itemsPerPage - this.rest;
      while (this.teller < this.amountRows) {
        this.dummylist.push(this.legeDummy);
        this.teller = this.teller + 1;
      }
      return this.dummylist;
    } else {
      return this.dummylist;
    }
  }

  ngOnInit() {
  }

}


