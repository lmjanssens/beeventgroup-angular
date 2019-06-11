import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../models/employee.model';
import {Instructor} from '../../../models/instructor.model';
import {Globals} from '../../globals';
import {NavbarComponent} from '../../../navbar/navbar.component';

@Component({
  selector: 'app-eventmanager-instructeurs',
  templateUrl: './eventmanager-instructeurs.component.html',
  styleUrls: ['./eventmanager-instructeurs.component.css']
})
export class EventmanagerInstructeursComponent implements OnInit {

  public instructorList: Instructor[] = [];
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;

  constructor(private globals: Globals, private navbar: NavbarComponent) {
  }


  ngOnInit() {
    this.globals.setHuidigePagina('Instructeurs');
    this.navbar.checkNavBarStyle();
    console.log(this.globals.getHuidigePagina());
  }

}


