import { Component, OnInit } from '@angular/core';
import {Globals} from '../../globals';
import {NavbarComponent} from '../../../navbar/navbar.component';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  constructor(private globals: Globals, private navbar: NavbarComponent) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Klanten');
    this.navbar.checkNavBarStyle()
    console.log(this.globals.getHuidigePagina());
  }

}
