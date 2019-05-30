import {Component, OnInit} from '@angular/core';
import {DummyModel} from '../../models/dummy.model';

@Component({
  selector: 'app-eventmanager-reserveringen',
  templateUrl: './eventmanager-reserveringen.component.html',
  styleUrls: ['./eventmanager-reserveringen.component.css']
})
export class EventmanagerReserveringenComponent implements OnInit {
  public dummylist: DummyModel[] = [
    new DummyModel(1, 'lol', '1-1-1'),
    new DummyModel(2, 'drol', '2-2-2'),
    new DummyModel(3, 'bol', '3-3-3'),
    new DummyModel(4, 'gol', '4-4-4'),
    new DummyModel(5, 'zol', '5-5-5'),
    new DummyModel(6, 'sol', '6-6-6'),
    new DummyModel(7, 'fol', '7-7-7'),
    new DummyModel(8, 'hol', '8-8-8'),
    new DummyModel(9, 'kol', '9-9-9'),
    new DummyModel(10, 'jol', '10-10-10'),
    new DummyModel(11, 'pol', '11-11-11'),
    new DummyModel(12, 'stol', '12-12-12'),
    new DummyModel(13, 'eol', '13-13-13'),
    new DummyModel(14, 'qol', '14-14-14'),
  ];
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  amountRows = 0;
  searchTerm: string;
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


