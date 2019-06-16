import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {first} from 'rxjs/operators';
import {EventModel} from '../models/event.model';
import {Supplier} from '../models/supplier.model';
import {EventLocation} from '../models/event-location.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private apiService: ApiService) {
  }

  event: EventModel;
  newEvent: EventModel;

  getAll(): Observable<EventModel[]> {
    return this.apiService.get<EventModel[]>('events');
  }

  getById(id: number) {
    const uri = 'events';
    return this.apiService.get(uri, id).pipe(first());
  }

  updateEvent(updatedCustomer: EventModel): Observable<EventModel> {
    const uri = 'events/';
    return this.apiService.put<EventModel>(uri + updatedCustomer.id, updatedCustomer);
  }

  save(event: any, supplier: Supplier, eventLocation: EventLocation): Observable<object> {
    const uri = 'events';
    return this.apiService.post(uri + '/' + supplier.id + '/' + eventLocation.id, event);
  }

  delete(id: number) {
    const uri = 'events/';
    console.log('in delete');
    console.log(id);
    return this.apiService.delete<void>(uri + id);
  }

  getEmptyEvent() {
    this.newEvent = new EventModel(null, null, null, null, null,
      null, null, '', '', '', '', '',
      0, 0, 0, '', 0);
    return this.newEvent;
  }
}
