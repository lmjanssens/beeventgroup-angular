import { Component, OnInit } from '@angular/core';
import {Globals} from '../components/globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private globals: Globals) { }

  ngOnInit() {
    this.checkNavBarStyle();
  }
  checkNavBarStyle() {
    const currentPage = this.globals.getHuidigePagina();
    console.log(currentPage);
    // document.getElementById(currentPage).style.fontWeight = 'bold';

  }
}
