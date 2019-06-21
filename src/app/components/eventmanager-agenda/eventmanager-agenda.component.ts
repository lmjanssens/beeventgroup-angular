import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {Order} from '../../models/order.model';
import {ReservationService} from '../../services/reservation.service';
import {FullCalendarComponent} from '@fullcalendar/angular';
import {AuthorizationService} from "../../services/authorization.service";
import {Role} from "../../enums/Role";


@Component({
  selector: 'app-eventmanager-agenda',
  templateUrl: './eventmanager-agenda.component.html',
  styleUrls: ['./eventmanager-agenda.component.css']
})
export class EventmanagerAgendaComponent implements OnInit {
  i = 0;
  j = 0;
  calendarPlugins = [dayGridPlugin];
  instructorsString;
  registeredEventId;
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  currentUser: any;
  authorized = false;

  constructor(private globals: Globals,
              private navbar: NavbarComponent,
              private reservationService: ReservationService,
              private authService: AuthorizationService) {
    this.authorized = this.authService.hasAuthorization();

    this.authService.authorized$.subscribe(
      authorized => {
        this.updateAuthentication();
      }
    );

    this.updateAuthentication();
  }

  updateAuthentication() {
    this.authorized = this.authService.hasAuthorization();

    if (!this.authorized) {
      this.currentUser = {};
      return;
    }

    this.currentUser = this.authService.getAuthenticator();
  }

  fillCalenderEvents(list) {
    while (this.i < list.length) {
      this.getInstructors(list[this.i]);
      this.calendarComponent.getApi().addEvent({
        title: list[this.i].event.name.toUpperCase() + '\n' + 'Start-/eindtijd: ' + list[this.i].startTime + ' - ' + list[this.i].endTime +
          '\n' + 'Instructeurs: ' + this.instructorsString,
        start: list[this.i].dateevent + 'T' + list[this.i].startTime,
        color: '#394365',
        url: (this.authorized && this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.EMPLOYEE) ? 'homeeventmanager/reserveringenoverview/orderdetails/' + list[this.i].orderId : 'homeinstructor/reserveringenoverview/orderdetails/' + list[this.i].orderId
      });
      console.log(this.calendarComponent.getApi().getEvents());
      this.i = this.i + 1;
    }
    this.i = 0;

    return list;
  }

  getOrders() {
    this.reservationService.getAll().subscribe(data => {
      this.fillCalenderEvents(data);
    });
  }

  getInstructors(order) {
    this.instructorsString = '';
    if (order.registeredEvents.length > 0) {
      while (this.j < order.registeredEvents.length) {
        if (order.registeredEvents[this.j].instructor.infix === null) {
          this.instructorsString = this.instructorsString + '\n' + order.registeredEvents[this.j].instructor.first_name
            + ' ' + order.registeredEvents[this.j].instructor.last_name;
          this.registeredEventId = order.registeredEvents[this.j].id;
        } else {
          this.instructorsString = this.instructorsString + '\n' + order.registeredEvents[this.j].instructor.first_name
            + ' ' + order.registeredEvents[this.j].instructor.infix + ' ' + order.registeredEvents[this.j].instructor.last_name;
          this.registeredEventId = order.registeredEvents[this.j].id;
        }
        this.j = this.j + 1;
      }
    }
    this.j = 0;
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Agenda');
    this.navbar.checkNavBarStyle();
    this.getOrders();
  }
}
