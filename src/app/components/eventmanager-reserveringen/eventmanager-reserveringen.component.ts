import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {AuthorizationService} from '../../services/authorization.service';
import {Role} from '../../enums/Role';
import {ReservationService} from '../../services/reservation.service';
import {AlertsService} from 'angular-alert-module';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-eventmanager-reserveringen',
  templateUrl: './eventmanager-reserveringen.component.html',
  styleUrls: ['./eventmanager-reserveringen.component.css']
})
export class EventmanagerReserveringenComponent implements OnInit {

  orderList: Order[] = [];
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;

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

  fetchOrders() {
    this.reservationService.getAll().subscribe(data => {
      this.orderList = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Reserveringen');
    this.navbar.checkNavBarStyle();
    console.log(this.globals.getHuidigePagina());
    this.fetchOrders();
  }

  getRoles() {
    return Role;
  }

  OnSubscribeToEvent(order: Order, eventId: number) {

    this.reservationService.subscribeToEvent(order.orderId, eventId, this.currentUser.username).subscribe(() => {
      alert('Uw registratie bij een evenement is succesvol verlopen.');
      this.ngOnInit();
    });

  }

  OnUnsubscribeToEvent(order: Order) {

    if (this.canUnsubscribeToEvent(order)) {
      let index = 0;
      while (index < order.registeredEvents.length) {
        if (order.registeredEvents[index].instructor.user_id.id === this.currentUser.uid) {
          this.reservationService.unsubscribeToEvent(order.registeredEvents[index].id).subscribe(
            success => {
              this.ngOnInit();
            },
            error1 => {
              console.log(error1);
            }
          );
          break;
        }
        index++;
      }
    } else {
      alert('Sorry, het is niet mogelijk om minder dan 7 dagen van te voren afzeggen op een evenement');
    }
  }

  OnUnsubscribeInstructorEvent(registeredEventId: number) {

    this.reservationService.unsubscribeToEvent(registeredEventId).subscribe(
      success => {
        this.ngOnInit();
      },
      error1 => {
        console.log(error1);
      }
    );

  }

  OnDelete(orderId) {
    if (!confirm(`Wilt deze reservering verwijderen?`)) {
      return;
    }
    this.reservationService.delete(orderId).subscribe(() => {
      this.fetchOrders();
    });
  }

  checkIfAlreadySubscribed(order: Order) {

    let index = 0;

    let duplicate = false;

    while (index < order.registeredEvents.length) {

      if (order.registeredEvents[index].instructor.user_id.id === this.currentUser.uid) {
        duplicate = true;
        break;
      }

      index++;

    }

    return duplicate;
  }

  canUnsubscribeToEvent(order: Order): boolean {

    let diff = Math.abs(new Date(order.dateevent).getTime() - new Date().getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    return (diffDays >= 7);
  }

}


