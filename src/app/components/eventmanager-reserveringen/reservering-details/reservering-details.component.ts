import {Component, OnInit} from '@angular/core';
import {Globals} from '../../globals';
import {ReservationService} from '../../../services/reservation.service';
import {EventService} from '../../../services/event.service';
import {CustomerService} from '../../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../../models/order.model';
import {EventModel} from '../../../models/event.model';
import {Customer} from '../../../models/customer.model';
import {AuthorizationService} from '../../../services/authorization.service';
import {Role} from '../../../enums/Role';

@Component({
  selector: 'app-reservering-details',
  templateUrl: './reservering-details.component.html',
  styleUrls: ['./reservering-details.component.css']
})
export class ReserveringDetailsComponent implements OnInit {

  order: Order;
  events: EventModel[];
  customers: Customer[];
  sub: any;
  currentId;
  currentUser: any;
  authenticated = false;


  constructor(private globals: Globals, private reservationService: ReservationService,
              private eventService: EventService, private customerService: CustomerService,
              private router: Router, private route: ActivatedRoute, private authService: AuthorizationService) {
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

  ngOnInit() {
    this.order = this.reservationService.getEmptyOrder();

    this.globals.setHuidigePagina('reserveringFormulier');

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.orderId;
      this.fetchOrderById();
    });
  }

  fetchOrderById() {
    this.reservationService.getById(this.currentId).subscribe(order => {
      this.order = order;
      console.log(this.order);
    });
  }

  getRoles() {
    return Role;
  }

  OnDelete(orderId) {
    if (!confirm(`Wilt deze reservering verwijderen?`)) {
      return;
    }
    this.reservationService.delete(orderId).subscribe(() => {
      this.router.navigate(['/homeeventmanager/reserveringenoverview']);
    });
  }

}

