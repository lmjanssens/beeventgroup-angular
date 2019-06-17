import { Component, OnInit } from '@angular/core';
import {Globals} from '../components/globals';
import {AuthorizationService} from '../services/authorization.service';
import {Role} from '../enums/Role';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: any;

  constructor( private globals: Globals, private authService: AuthorizationService) {
    this.currentUser = this.authService.getAuthenticator();
  }

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

  getRoleRootLink() {
    let roleRootLink = 'homeeventmanager';

    if (this.currentUser.role === Role.INSTRUCTOR) {
      roleRootLink = 'homeinstructor';
    }

    return roleRootLink;
  }

}
