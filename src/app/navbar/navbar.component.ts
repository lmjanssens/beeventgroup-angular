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
  }
  checkNavBarStyle() {
    const currentPage = this.globals.getHuidigePagina();
    console.log(currentPage);
    document.getElementById(currentPage).style.fontWeight = 'bold';
    document.getElementById(currentPage).style.color = '#FFFFFF';
    document.getElementById(currentPage).style.opacity = '0.5';
    document.getElementById(currentPage).style.backgroundColor =  '#394365';
  }
}
