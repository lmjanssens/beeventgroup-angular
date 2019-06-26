 import {Component, OnInit} from '@angular/core';
import {Order} from '../../../models/order.model';
import {Customer} from '../../../models/customer.model';
import {EventModel} from '../../../models/event.model';
import {CustomerService} from '../../../services/customer.service';
import {EventService} from '../../../services/event.service';
import {ReservationService} from '../../../services/reservation.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AlertsService} from 'angular-alert-module';
import {Globals} from '../../globals';

@Component({
  selector: 'app-reserveringen-create',
  templateUrl: './reserveringen-create.component.html',
  styleUrls: ['./reserveringen-create.component.css']
})
export class ReserveringenCreateComponent implements OnInit {
  order: Order;
  customers: Customer[];
  events: EventModel[];
  selectedCustomer;
  selectedEvent;
  date;
  time = new Date(this.date);

  constructor(private customerService: CustomerService, private eventService: EventService,
              private reservationService: ReservationService, private router: Router,
              private alertService: AlertsService, private globals: Globals) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('reserveringFormulier');
    this.fetchCustomers();
    this.fetchEvents();
    this.order = this.reservationService.getEmptyOrder();
  }

  getCustomers(): Customer[] {
    return this.customers;
  }

  getEvents(): EventModel[] {
    return this.events;
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

  bindCustomerAndEventToOrder() {
    this.order.customer = this.selectedCustomer;
    this.order.event = this.selectedEvent;
  }

  ngSubmit(f: NgForm) {
    this.bindCustomerAndEventToOrder();

    if (f.form.valid) {
      const data = JSON.parse(JSON.stringify(this.order)) as any;
      this.reservationService.save(data, this.selectedCustomer, this.selectedEvent).subscribe(() => {
        this.router.navigate(['/homeeventmanager/reserveringenoverview']
        );
      });
      alert('De reservering is toegevoegd.');
    } else {
      alert('Vul de belangrijke velden in.');
    }
  }
}
