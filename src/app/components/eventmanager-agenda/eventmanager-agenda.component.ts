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
  calendarPlugins = [dayGridPlugin];
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  public orderList: Order[] = [
    new Order(1, null, '1-1-1', '2019-07-01',
      '', '', '', null, null, null),
    new Order(2, null, '1-1-1', '2019-07-02',
      '', '', '', null, null, null),
    new Order(3, null, '1-1-1', '2019-07-03',
      '', '', '', null, null, null),
    new Order(4, null, '1-1-1', '2019-07-04',
      '', '', '', null, null, null),
    new Order(5, null, '1-1-1', '2019-07-05',
      '', '', '', null, null, null),
    new Order(6, null, '1-1-1', '2019-07-06',
      '', '', '', null, null, null)];

  constructor(private globals: Globals, private navbar: NavbarComponent, private reservationService: ReservationService) {
  }

  fillCalenderEvents(list) {
    console.log(list);
    while (this.i < list.length) {
      this.calendarComponent.getApi().addEvent({title: list[this.i].event.name, start: list[this.i].dateevent});
      this.i = this.i + 1;
    }

    return list;
  }

  getOrders() {
    this.reservationService.getAll().subscribe(data => {
      this.fillCalenderEvents(data);
    });
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Agenda');
    this.navbar.checkNavBarStyle();
    this.getOrders();
  }
}
