import {Component, OnInit} from '@angular/core';
import {Event} from '../../models/event.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {AuthorizationService} from '../../services/authorization.service';
import {Role} from "../../enums/Role";


@Component({
  selector: 'app-eventmanager-events',
  templateUrl: './eventmanager-events.component.html',
  styleUrls: ['./eventmanager-events.component.css']
})
export class EventmanagerEventsComponent implements OnInit {

  public eventList: Event[] = [
    new Event(1, null, null,
      null, null, null, null, 'Pizza Event', '', '', null, '',
      11.50, null, null, '', 5),
    new Event(2, null, null,
      null, null, null, null, 'Scheveningen Party', '', '', null, '',
      1123.50, null, null, '', 1),
    new Event(3, null, null,
      null, null, null, null, 'Kareoke Night', '', '', null, '',
      1.50, null, null, '', 2),
    new Event(4, null, null,
      null, null, null, null, 'Date Night 2', '', '', null, '',
      34.50, null, null, '', 3),
    new Event(5, null, null,
      null, null, null, null, 'Eminem Concert', '', '', null, '',
      100, null, null, '', 4),
    new Event(6, null, null,
      null, null, null, null, 'UFC 235', '', '', null, '',
      0, null, null, '', 5),
  ];
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  amountRows = 0;
  searchTerm: string;
  emptyEvent: Event = new Event(null, null, null,
    null, null, null, null, '', '', '', null, '', null,
    null, null, '', 20);

  currentUser: any;
  authenticated = false;


  constructor(private globals: Globals, private navbar: NavbarComponent, private authService: AuthorizationService) {
    this.authenticated = this.authService.hasAuthorization();

    this.authService.authorized$.subscribe(
      authorized => {
        this.updateAuthentication();
      }
    );

    this.updateAuthentication();
  }

  updateAuthentication() {
    this.authenticated = this.authService.hasAuthorization();

    if (!this.authenticated) {
      this.currentUser = {};
      return;
    }

    this.currentUser = this.authService.getAuthenticator();
  }

  tableFiller() {
    if (this.eventList.length !== 0 && this.eventList.length % this.itemsPerPage !== 0) {
      this.rest = this.eventList.length % this.itemsPerPage;
      this.amountRows = this.itemsPerPage - this.rest;
      while (this.teller < this.amountRows) {
        this.eventList.push(this.emptyEvent);
        this.teller = this.teller + 1;
      }
      return this.eventList;
    } else {
      return this.eventList;
    }
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Evenementen');
    this.navbar.checkNavBarStyle();
  }

  getRoles() {
    return Role;
  }

}



