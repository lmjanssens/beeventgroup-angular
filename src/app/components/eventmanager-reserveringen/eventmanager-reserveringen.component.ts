import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {AuthorizationService} from '../../services/authorization.service';
import {Role} from '../../enums/Role';
import {ReservationService} from '../../services/reservation.service';
import {AlertsService} from 'angular-alert-module';
import {Router} from '@angular/router';
import {Customer} from "../../models/customer.model";
import {Observable, pipe, Subject} from "rxjs";
import {ApiService} from "../../services/api.service";
import {first, map} from "rxjs/operators";

@Component({
  selector: 'app-eventmanager-reserveringen',
  templateUrl: './eventmanager-reserveringen.component.html',
  styleUrls: ['./eventmanager-reserveringen.component.css']
})
export class EventmanagerReserveringenComponent implements OnInit {

  public orderList: any = [];
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  amountRows = 0;
  searchTerm: string;
  emptyOrder: Order = new Order(null, null, '', '',
    '', '', '', null, null, null, null, 0);

  currentUser: any;
  authenticated = false;


  constructor(private globals: Globals,
              private navbar: NavbarComponent,
              private router: Router,
              private apiService: ApiService,
              private authService: AuthorizationService,
              private reservationService: ReservationService,
              private alertService: AlertsService) {
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

  getOrders() {
    this.orderList = [];
    this.reservationService.getAll().subscribe((data: {}) => {
      console.log(data);
      this.orderList = data;
      if (this.orderList.length !== 0 && this.orderList.length % this.itemsPerPage !== 0) {
        this.rest = this.orderList.length % this.itemsPerPage;
        this.amountRows = this.itemsPerPage - this.rest;
        this.teller = this.teller + this.orderList.length;
      }
    });
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Reserveringen');
    this.navbar.checkNavBarStyle();
    console.log(this.globals.getHuidigePagina());
    this.getOrders();
  }

  getRoles() {
    return Role;
  }

  OnSubscribeToEvent(order: Order, eventId: number) {

    console.log(order);
    this.reservationService.subscribeToEvent(order.orderId, eventId, this.currentUser.username).subscribe(() => {
      alert('Uw registratie bij een evenement is succesvol verlopen.');
      this.ngOnInit();
    });

  }

  OnUnsubscribeToEvent(eventId: number) {
    this.reservationService.unsubscribeToEvent(eventId).subscribe(
      success => {
        this.ngOnInit();
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  OnDelete(orderId: number) {
    this.reservationService.delete(orderId).subscribe(success => {
      this.getOrders();
    });
  }

  checkIfAlreadySubscribed(order: Order) {

    let index = 0;
    let duplicate = false;

    while (index < order.registeredEvents.length) {

      if (order.registeredEvents[index].instructor.first_name === this.currentUser.username) {
        duplicate = true;
        break;
      }
      index++;

    }

    return duplicate;
  }

}


