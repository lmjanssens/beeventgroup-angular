import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {Order} from '../../models/order.model';
import {ReservationService} from '../../services/reservation.service';
import {FullCalendarComponent} from '@fullcalendar/angular';


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
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;


  constructor(private globals: Globals, private navbar: NavbarComponent, private reservationService: ReservationService) {
  }

  fillCalenderEvents(list) {
    console.log(list);
    while (this.i < list.length) {
      this.getInstructors(list[this.i]);
      this.calendarComponent.getApi().addEvent({
        title: list[this.i].event.name.toUpperCase() + '\n' + ' ' +
          '\n' + 'Instructeurs: ' + this.instructorsString, start: list[this.i].dateevent + 'T' + list[this.i].startTime, color: '#394365'
      });

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
        } else {
          this.instructorsString = this.instructorsString + '\n' + order.registeredEvents[this.j].instructor.first_name
            + ' ' + order.registeredEvents[this.j].instructor.infix + ' ' + order.registeredEvents[this.j].instructor.last_name;
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
