import {Component, OnInit} from '@angular/core';
import {EventModel} from '../../models/event.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {EventService} from '../../services/event.service';
import {EventLocation} from '../../models/event-location.model';


@Component({
  selector: 'app-eventmanager-events',
  templateUrl: './eventmanager-events.component.html',
  styleUrls: ['./eventmanager-events.component.css']
})
export class EventmanagerEventsComponent implements OnInit {
  events: EventModel[] = [];
  eventLocation: EventLocation = new EventLocation();
  rest: number;
  firstPage = 1;
  itemsPerPage = 5;
  teller = 0;
  amountRows = 0;
  searchTerm: string;
  emptyEvent: EventModel = new EventModel(null, null, null,
    null, null, null, null, '', '', '', null, '', null,
    null, null, '');


  constructor(private globals: Globals, private navbar: NavbarComponent, private eventService: EventService) {
  }

  // tableFiller() {
  //   if (this.eventList.length !== 0 && this.eventList.length % this.itemsPerPage !== 0) {
  //     this.rest = this.eventList.length % this.itemsPerPage;
  //     this.amountRows = this.itemsPerPage - this.rest;
  //     while (this.teller < this.amountRows) {
  //       this.eventList.push(this.emptyEvent);
  //       this.teller = this.teller + 1;
  //     }
  //     return this.eventList;
  //   } else {
  //     return this.eventList;
  //   }
  // }

  getEvents(): EventModel[] {
    return this.events;
  }

  onDelete(event, eventName) {
    if (!confirm(`Wilt u het evenement "${eventName}" verwijderen ?`)) {
      return;
    }
    this.eventService.delete(event);
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Evenementen');
    this.navbar.checkNavBarStyle();

    this.eventService.getAll().subscribe(events => {
      this.events = events;
      console.log(this.events);
      events.forEach(value => {
        value.location = this.eventLocation;
        console.log(value.location.id);
        console.log(this.eventLocation);
        console.log(this.eventLocation.name);
      });
    });
  }
}



