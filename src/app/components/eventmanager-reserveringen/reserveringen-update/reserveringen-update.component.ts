import {Component, OnInit} from '@angular/core';
import {Order} from '../../../models/order.model';
import {Globals} from '../../globals';
import {ReservationService} from '../../../services/reservation.service';
import {EventService} from '../../../services/event.service';
import {CustomerService} from '../../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EventModel} from '../../../models/event.model';
import {Customer} from '../../../models/customer.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-reserveringen-update',
  templateUrl: './reserveringen-update.component.html',
  styleUrls: ['./reserveringen-update.component.css']
})
export class ReserveringenUpdateComponent implements OnInit {
  order: Order;
  events: EventModel[];
  customers: Customer[];
  selectedEvent;
  selectedCustomer;
  loading: true;
  updatedEvent = false;
  sub: any;
  currentId;

  constructor(private globals: Globals, private reservationService: ReservationService,
              private eventService: EventService, private customerService: CustomerService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.fetchCustomers();
    this.fetchEvents();
    this.order = this.reservationService.getEmptyOrder();

    this.globals.setHuidigePagina('reserveringFormulier');

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.orderId;
      this.fetchOrderById();
    });
  }

  fetchCustomers() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  fetchEvents() {
    this.eventService.getAll().subscribe(events => {
      this.events = events;
    });
  }

  fetchOrderById() {
    this.reservationService.getById(this.currentId).subscribe(order => {
      this.order = order;
      this.selectedEvent = this.order.event;
      this.selectedCustomer = this.order.customer;
      this.updatedEvent = true;
    });
  }

  getEvents(): EventModel[] {
    return this.events;
  }

  getCustomers(): Customer[] {
    return this.customers;
  }

  linkCustomerAndEvent() {
    this.order.customer = this.selectedCustomer;
    this.order.event = this.selectedEvent;
  }

  ngSubmit(f: NgForm) {
    this.linkCustomerAndEvent();

    if (f.form.valid) {
      const data = JSON.parse(JSON.stringify(this.order)) as any;
      this.reservationService.updateReservation(data, this.selectedCustomer, this.selectedEvent).subscribe(() => {
        this.router.navigate(['/homeeventmanager/reserveringenoverview']);
      });
    } else {
      alert('geen data ingevuld');
    }
  }
}
