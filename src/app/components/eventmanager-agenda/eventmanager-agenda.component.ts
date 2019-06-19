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
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;


  constructor(private globals: Globals, private navbar: NavbarComponent, private reservationService: ReservationService) {
  }

  fillCalenderEvents(list) {
    console.log(list);
    while (this.i < list.length) {
      this.getInstructors(list[this.i]);
      this.calendarComponent.getApi().addEvent({
        title: 'Evenement: ' + list[this.i].event.name + '' +
          '\n' + 'Instructeurs:', start: list[this.i].dateevent, color: '#394365'
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
    while (this.j < order.registeredEvents.length) {
      console.log('hier ' + order.registeredEvents[this.j].instructor.first_name);
      this.j = this.j + 1;
    }
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Agenda');
    this.navbar.checkNavBarStyle();
    this.getOrders();
  }
}
