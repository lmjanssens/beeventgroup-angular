import {Component, OnInit} from '@angular/core';
import {EventModel} from '../../../models/event.model';
import {EventLocation} from '../../../models/event-location.model';
import {Globals} from '../../globals';
import {NavbarComponent} from '../../../navbar/navbar.component';
import {EventService} from '../../../services/event.service';
import {Router} from '@angular/router';
import {AlertsService} from 'angular-alert-module';
import {NgForm} from '@angular/forms';
import {Supplier} from '../../../models/supplier.model';
import {EventlocationService} from '../../../services/eventlocation.service';
import {SupplierService} from '../../../services/supplier.service';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.css']
})
export class EventsCreateComponent implements OnInit {
  event: EventModel;
  eventLocations: EventLocation[];
  suppliers: Supplier[];
  selectTag;
  selectedEvent;
  selectedLocation;
  selectedSupplier;

  constructor(private globals: Globals, private navbar: NavbarComponent,
              private eventService: EventService, private router: Router, private alertService: AlertsService,
              private eventLocationService: EventlocationService, private supplierService: SupplierService) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('evenementFormulier');
    console.log(this.globals.getHuidigePagina());
    this.event = new EventModel(null, null, null, null, null,
      null, null, '', '', '', '', '',
      0, 0, 0, '');

    this.supplierService.getAll().subscribe(suppliers => {
      this.suppliers = suppliers;
    });

    this.eventLocationService.getAll().subscribe(eventLocations => {
      this.eventLocations = eventLocations;
    });
  }

  getEventLocations(): EventLocation[] {
    return this.eventLocations;
  }

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  setOwnEvent() {
    this.selectTag = document.getElementById('ownEvent');
    this.selectedEvent = this.selectTag.options[this.selectTag.selectedIndex].value;
    this.selectedEvent === 'J' ? this.event.ownEvent = true : this.event.ownEvent = false;
  }

  ngSubmit(f: NgForm) {
    this.setOwnEvent();
    this.event.supplier = this.selectedSupplier;
    this.event.location = this.selectedLocation;

    if (f.form.valid) {
      const data = JSON.parse(JSON.stringify(this.event)) as any;
      this.eventService.saveWithDetails(data, this.selectedSupplier, this.selectedLocation).subscribe(() => {
        setTimeout(() => {
          this.router.navigate(['/homeeventmanager/evenementenoverview']
          );
        }, 1000);
      });
      (document.getElementById('submit') as HTMLInputElement).disabled = true;
      this.alertService.setMessage('Het evenement ' + this.event.name + ' is toegevoegd.', 'success');
    } else {
      this.alertService.setMessage('Vul de belangrijke velden in.', 'error');
    }
  }
}
