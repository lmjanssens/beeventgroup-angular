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
import {EventImage} from '../../../models/event-image.model';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.css']
})
export class EventsCreateComponent implements OnInit {
  event: EventModel;
  newLocation: EventLocation;
  newLocations: EventLocation[] = [];
  locationName = '';
  eventLocations: EventLocation[];
  suppliers: Supplier[];
  image: '';
  newImage: EventImage = new EventImage(null, null, '');

  ownEvent: string;
  locationToDelete;
  selectedEvent;
  selectedLocation;
  selectedSupplier;

  constructor(private globals: Globals, private navbar: NavbarComponent,
              private eventService: EventService, private router: Router, private alertService: AlertsService,
              private eventLocationService: EventlocationService, private supplierService: SupplierService) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('evenementFormulier');

    this.event = this.eventService.getEmptyEvent();
    this.newLocation = this.eventLocationService.getEmptyEventLocation();
    this.event.eventImages = [];
    this.fetchSuppliers();
    this.fetchEventLocations();
  }

  fetchSuppliers() {
    this.supplierService.getAll().subscribe(suppliers => {
      this.suppliers = suppliers;
    });
  }

  fetchEventLocations() {
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
    this.event.ownEvent = this.ownEvent === 'Ja';
  }

  onCreateLocation() {
    this.newLocation = this.eventLocationService.getEmptyEventLocation();

    this.newLocation.name = this.locationName;
    this.locationName = '';
    this.newLocations.push(this.newLocation);
  }

  onDeleteLocation() {
    if (this.newLocations.length === 0) {
      alert('Geen locatie om te verwijderen!');
      return;
    } else {
      alert('Locatie succesvol verwijderd.');
      this.newLocations.splice(-1, 1);
    }
  }

  addNewLocations() {
    this.newLocations.forEach(location => {
      this.eventLocationService.save(location).subscribe(() => console.log('Locatie toegevoegd.'));
    });
    alert('Locaties toegevoegd.');
    this.newLocations = [];
  }

  onDeleteOldLocation(oldLocation) {
    this.eventLocationService.delete(oldLocation.id).subscribe(() => {
      alert('Oude locatie verwijderd.');
    });
    this.fetchEventLocations();
  }

  ngSubmit(f: NgForm) {
    this.setOwnEvent();
    this.event.supplier = this.selectedSupplier;
    this.event.location = this.selectedLocation;
    this.newImage = new EventImage(null, null, '');
    this.newImage.imagePath = this.image;
    this.event.eventImages.push(this.newImage);

    if (f.form.valid) {
      const data = JSON.parse(JSON.stringify(this.event)) as any;
      this.eventService.save(data, this.selectedSupplier, this.selectedLocation).subscribe(() => {
        this.router.navigate(['/homeeventmanager/evenementenoverview']
        );
      });
      alert('Het evenement ' + this.event.name + ' is toegevoegd.');
    } else {
      alert('Vul de belangrijke velden in.');
    }
  }
}
