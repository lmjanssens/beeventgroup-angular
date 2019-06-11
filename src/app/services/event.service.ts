import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {EventModel} from '../models/event.model';
import {Supplier} from '../models/supplier.model';
import {EventLocation} from '../models/event-location.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService extends AbstractService<EventModel> {
  constructor(http: HttpClient) {
    super(http, 'events/');
  }

  saveWithDetails(event: EventModel, supplier: Supplier, eventLocation: EventLocation): Observable<EventModel> {
    return this.http.post<EventModel>(environment.apiHostname + this.PATH + supplier.id + '/' + eventLocation.id, event);
  }
}
