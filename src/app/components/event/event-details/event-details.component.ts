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
import {Role} from '../../../enums/Role';
import {AuthorizationService} from '../../../services/authorization.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: EventModel;
  eventLocation: EventLocation;
  suppliers: Supplier[];
  loading: true;
  private sub: any;
  currentId;
  currentUser: any;
  authenticated = false;

  constructor(private globals: Globals, private eventLocationService: EventlocationService,
              private supplierService: SupplierService, private router: Router, private authService: AuthorizationService,
              private eventService: EventService, private route: ActivatedRoute, private location: Location) {
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

  ngOnInit() {
    this.globals.setHuidigePagina('eventupdate');

    this.event = this.eventService.getEmptyEvent();
    this.eventLocation = this.eventLocationService.getEmptyEventLocation();

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.eventId;
      this.eventService.getById(this.currentId).subscribe(event => {
        this.event = event;
        this.eventLocation = this.event.location;
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

  getRoles() {
    return Role;
  }
}
