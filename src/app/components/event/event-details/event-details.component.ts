import {Component, OnInit} from '@angular/core';
import {Globals} from '../../globals';
import {EventlocationService} from '../../../services/eventlocation.service';
import {SupplierService} from '../../../services/supplier.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../../services/event.service';
import {EventModel} from '../../../models/event.model';
import {EventLocation} from '../../../models/event-location.model';
import {Supplier} from '../../../models/supplier.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: EventModel;
  eventLocation: EventLocation = new EventLocation();
  suppliers: Supplier[];
  loading: true;
  private sub: any;
  currentId;

  constructor(private globals: Globals, private eventLocationService: EventlocationService,
              private supplierService: SupplierService, private router: Router,
              private eventService: EventService, private route: ActivatedRoute, private location: Location) {
  }


  ngOnInit() {

    this.globals.setHuidigePagina('eventupdate');

    this.event = this.eventService.getEmptyEvent();

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.eventId;
      console.log(this.currentId);
      this.eventService.getById(this.currentId).subscribe(event => {
        this.event = event;
        this.eventLocation = this.event.location;
        console.log(event);
      });
    });
  }

  onDelete() {
    if (!confirm(`Wilt u de event "${this.event.name}" verwijderen ?`)) {
      return;
    }
    this.eventService.delete(this.event.id).subscribe(() => {
      this.location.back();
    });
  }
}
