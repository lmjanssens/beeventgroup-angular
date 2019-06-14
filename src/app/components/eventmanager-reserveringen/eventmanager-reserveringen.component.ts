import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {AuthorizationService} from '../../services/authorization.service';
import {Role} from '../../enums/Role';
import {ReservationService} from '../../services/reservation.service';
import {AlertsService} from 'angular-alert-module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-eventmanager-reserveringen',
  templateUrl: './eventmanager-reserveringen.component.html',
  styleUrls: ['./eventmanager-reserveringen.component.css']
})
export class EventmanagerReserveringenComponent implements OnInit {

  public orderList: Order[] = [
    {
      orderId: 2,
      customer: {
        customerId: 2,
        customer_orders: [],
        title: 'mevrouw',
        first_name: 'Nina',
        infix: 'van der',
        last_name: 'Hulde',
        address: 'Bloemenlaan 57',
        zipcode: '9284WL',
        country: 'Nederland',
        city: 'Nijmegen',
        gender: 'v',
        email_addresses: [
          null
        ],
        phone_numbers: [
          null
        ]
      },
      dateorder: '2019-01-10',
      dateevent : '2019-01-10',
      note: 'test note',
      starttime: '2019-01-10T13:37:42.000+0000',
      endtime: '2019-01-10T13:37:42.000+0000',
      catering_orders: [],
      invoices: {
          invoiceNumber: 2,
          order: null,
          dateinvoice: '2019-01-10',
          paymentextras: 'dit kost te veel',
          pricepp: 1242,
          pricebtw: 12453,
          othercosts: 120.0,
          othercostsbtw: 190.0,
          tobepaid: 1242.0,
          paid: 4.0,
          datepartpaid: '2019-01-10',
          datefullpaid: '2019-01-10',
          bankaccount: 'INGB13371337',
          dateinvoicemailsent: '2019-01-10',
          excludefrominvoicealert: true
        },
      events: {
        id: 2,
        supplier: null,
        location: null,
        order: null,
        registeredEvents: null,
        eventImages: null,
        ownEvent: true,
        name: 'Expeditie Hello World',
        description: 'This is a great event',
        program: 'Fietstocht',
        duration: '1:30',
        options: null,
        pricePerPerson: 130.5,
        priceBuyPerPerson: 0.0,
        btw: 0.21,
        note: null,
        maxinstructor: 5
      },
      quotations: [
        {
          quotationNumber: 2,
          order: null,
          datequotation: '2019-01-10',
          bankaccount: 'ABNA4200982',
          pricebtw: 1212.0,
          pricepp: 40.0
        }
      ]
    }
  ];
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  amountRows = 0;
  searchTerm: string;
  emptyOrder: Order = new Order(null, null, '', '',
    '', '', '', null, null, null, null);

  currentUser: any;
  authenticated = false;


  constructor(private globals: Globals,
              private navbar: NavbarComponent,
              private router: Router,
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

  tableFiller() {
    if (this.orderList.length !== 0 && this.orderList.length % this.itemsPerPage !== 0) {
      this.rest = this.orderList.length % this.itemsPerPage;
      this.amountRows = this.itemsPerPage - this.rest;
      while (this.teller < this.amountRows) {
        this.orderList.push(this.emptyOrder);
        this.teller = this.teller + 1;
      }
      return this.orderList;
    } else {
      return this.orderList;
    }
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Reserveringen');
    this.navbar.checkNavBarStyle();
    console.log(this.globals.getHuidigePagina());
  }

  getRoles() {
    return Role;
  }

  OnSubscribeToEvent(orderId: number, eventId: number) {

    this.reservationService.checkAlreadyRegisteredEvent(orderId, this.currentUser.username).subscribe(
      data => {
        let index = 0;
        let duplicate = false;
        while (index < data.length) {
          if (data[index].order.orderId === orderId && data[index].instructor.first_name === this.currentUser.username) {
            alert('U bent al ingeschreven op dit evenement');
            duplicate = true;
            break;
          }
          index++;
        }

        if (duplicate === false) {
          this.reservationService.subscribeToEvent(orderId, eventId, this.currentUser.username).subscribe(() => {
            alert('Uw registratie bij een evenement is succesvol verlopen.');
            this.router.navigate(['/homeinstructor']);
          });
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}


