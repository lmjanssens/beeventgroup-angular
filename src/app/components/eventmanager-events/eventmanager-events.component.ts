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
  event: EventModel;
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;

  constructor(private globals: Globals, private navbar: NavbarComponent, private eventService: EventService) {
  }

  getEvents(): EventModel[] {
    return this.events;
  }

  onDelete(id, eventName) {
    if (!confirm(`Wilt u het evenement "${eventName}" verwijderen ?`)) {
      return;
    }
    this.eventService.delete(id).subscribe(() => {
      this.fetchEvents();
    });
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Evenementen');
    this.navbar.checkNavBarStyle();

    this.fetchEvents();
  }

  fetchEvents() {
    this.eventService.getAll().subscribe(events => {
      this.events = events;
      events.forEach(value => {
        value.location = this.eventLocation;
      });
    });
  }
}



