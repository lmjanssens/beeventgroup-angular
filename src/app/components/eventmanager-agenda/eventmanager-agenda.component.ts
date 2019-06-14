import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {Order} from '../../models/order.model';


@Component({
  selector: 'app-eventmanager-agenda',
  templateUrl: './eventmanager-agenda.component.html',
  styleUrls: ['./eventmanager-agenda.component.css']
})
export class EventmanagerAgendaComponent implements OnInit {
  i = 0;
  calendarPlugins = [dayGridPlugin];
  public calenderEvents = [];
  public orderList: Order[] = [
    // new Order(1, null, '1-1-1', '2019-07-01',
    //   '', '', '', null, null, null, null, null),
    // new Order(2, null, '1-1-1', '2019-07-02',
    //   '', '', '', null, null, null, null, null),
    // new Order(3, null, '1-1-1', '2019-07-03',
    //   '', '', '', null, null, null, null, null),
    // new Order(4, null, '1-1-1', '2019-07-04',
    //   '', '', '', null, null, null, null, null),
    // new Order(5, null, '1-1-1', '2019-07-05',
    //   '', '', '', null, null, null, null, null),
    // new Order(6, null, '1-1-1', '2019-07-06',
    //   '', '', '', null, null, null, null, null)
  ];

  constructor(private globals: Globals, private navbar: NavbarComponent) {
  }

  fillCalenderEvents() {
    while (this.i < this.orderList.length) {
      this.calenderEvents.push({title: this.orderList[this.i].orderId.toString(), date: this.orderList[this.i].dateevent});
      console.log(this.calenderEvents);
      this.i = this.i + 1;
    }
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Agenda');
    this.navbar.checkNavBarStyle();
    console.log(this.globals.getHuidigePagina());
    this.fillCalenderEvents();
  }

}
