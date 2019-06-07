import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';

@Component({
  selector: 'app-eventmanager-agenda',
  templateUrl: './eventmanager-agenda.component.html',
  styleUrls: ['./eventmanager-agenda.component.css']
})
export class EventmanagerAgendaComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  constructor(private globals: Globals, private navbar: NavbarComponent) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Agenda');
    this.navbar.checkNavBarStyle();
    console.log(this.globals.getHuidigePagina());
  }

}
