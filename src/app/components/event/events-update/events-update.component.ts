import {Component, OnInit, ViewChild} from '@angular/core';
import {EventModel} from '../../../models/event.model';
import {EventLocation} from '../../../models/event-location.model';
import {Supplier} from '../../../models/supplier.model';
import {EventlocationService} from '../../../services/eventlocation.service';
import {SupplierService} from '../../../services/supplier.service';
import {Globals} from '../../globals';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {EventService} from '../../../services/event.service';
import {ImageUploadComponent} from '../../image-upload/image-upload.component';
import {CustomerEmail} from '../../../models/customer-email.model';
import {EventImage} from '../../../models/event-image.model';

@Component({
  selector: 'app-events-update',
  templateUrl: './events-update.component.html',
  styleUrls: ['./events-update.component.css']
})
export class EventsUpdateComponent implements OnInit {
  @ViewChild(ImageUploadComponent)
  public imageUpload: ImageUploadComponent;
  image = '';
  newImage: EventImage = new EventImage(null, null, '');
  event: EventModel;

  eventLocations: EventLocation[];
  suppliers: Supplier[];
  loading: true;
  selectTag;
  selectedEvent;
  selectedLocation;
  selectedSupplier;
  private sub: any;
  private updatedEvent = false;
  currentId;

  constructor(private globals: Globals, private eventLocationService: EventlocationService,
              private supplierService: SupplierService, private router: Router,
              private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.fetchSuppliers();
    this.fetchLocations();

    this.globals.setHuidigePagina('eventupdate');

    this.event = this.eventService.getEmptyEvent();

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.eventId;
      this.fetchEventById();
      this.image = this.event.eventImages[0].imagePath;
    });
  }

  fetchSuppliers() {
    this.supplierService.getAll().subscribe(suppliers => {
      this.suppliers = suppliers;
    });
  }

  fetchLocations() {
    this.eventLocationService.getAll().subscribe(eventLocations => {
      this.eventLocations = eventLocations;
    });
  }

  fetchEventById() {
    this.eventService.getById(this.currentId).subscribe(event => {
      this.event = event;
      this.updatedEvent = true;
      this.selectedLocation = this.event.location;
      this.selectedSupplier = this.event.supplier ;
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

  linkLocationSuppliersOwnEvent() {
    this.setOwnEvent();
    this.event.location = this.selectedLocation;
    this.event.supplier = this.selectedSupplier;
  }

  updateImageName(imageName: string) {
    this.event.eventImages[0].imagePath = imageName;
  }

  ngSubmit(f: NgForm) {
    this.imageUpload.delete();
    this.imageUpload.upload();

    this.linkLocationSuppliersOwnEvent();

    if (f.form.valid) {
      const data = JSON.parse(JSON.stringify(this.event)) as any;
      console.log(data);
      this.eventService.updateEvent(data, this.selectedSupplier, this.selectedLocation).subscribe(() => {
        this.router.navigate(['/homeeventmanager/evenementenoverview']);
        console.log(data);
      });
    } else {
      alert('geen data ingevuld');
    }
  }
}
