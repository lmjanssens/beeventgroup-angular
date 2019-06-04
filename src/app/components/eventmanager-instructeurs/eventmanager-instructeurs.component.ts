import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employee.model';
import {Instructor} from '../../models/instructor.model';

@Component({
  selector: 'app-eventmanager-instructeurs',
  templateUrl: './eventmanager-instructeurs.component.html',
  styleUrls: ['./eventmanager-instructeurs.component.css']
})
export class EventmanagerInstructeursComponent implements OnInit {

  public instructorList: Instructor[] = [
    new Instructor(1, null, 'Derick', '', 'Peters', '0694823904', 'derick@hotmail.com'),
    new Instructor(2, null, 'Jon', '', 'Jones', '0623823904', 'jon@hotmail.com'),
    new Instructor(3, null, 'Jon', '', 'Jhonson', '0694883904', 'jon2@hotmail.com'),
    new Instructor(4, null, 'Peter', '', 'Jhonson', '0614824904', 'peter@hotmail.com'),
    new Instructor(5, null, 'Richard', '', 'Jhonson', '0674523904', 'rich@hotmail.com'),
    new Instructor(6, null, 'Richard', '', 'Pizzaman', '0604623904', 'defk@hotmail.com'),
  ];
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  amountRows = 0;
  searchTerm: string;
  emptyInstructor: Instructor = new Instructor(null, null, '', '', '', '', '');

  constructor() {
  }

  tableFiller() {
    if (this.instructorList.length !== 0 && this.instructorList.length % this.itemsPerPage !== 0) {
      this.rest = this.instructorList.length % this.itemsPerPage;
      this.amountRows = this.itemsPerPage - this.rest;
      while (this.teller < this.amountRows) {
        this.instructorList.push(this.emptyInstructor);
        this.teller = this.teller + 1;
      }
      return this.instructorList;
    } else {
      return this.instructorList;
    }
  }

  ngOnInit() {
  }

}


