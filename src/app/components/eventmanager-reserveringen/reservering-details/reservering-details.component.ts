import {Component, OnInit} from '@angular/core';
import {Globals} from '../../globals';
import {ReservationService} from '../../../services/reservation.service';
import {EventService} from '../../../services/event.service';
import {CustomerService} from '../../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../../models/order.model';
import {EventModel} from '../../../models/event.model';
import {Customer} from '../../../models/customer.model';

@Component({
  selector: 'app-reservering-details',
  templateUrl: './reservering-details.component.html',
  styleUrls: ['./reservering-details.component.css']
})
export class ReserveringDetailsComponent implements OnInit {

  order: Order;
  events: EventModel[];
  customers: Customer[];
  loading: true;
  sub: any;
  currentId;

  constructor(private globals: Globals, private reservationService: ReservationService,
              private eventService: EventService, private customerService: CustomerService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.order = this.reservationService.getEmptyOrder();

    this.globals.setHuidigePagina('reserveringupdate');

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
}
