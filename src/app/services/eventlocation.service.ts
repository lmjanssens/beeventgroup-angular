import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {EventLocation} from '../models/event-location.model';

@Injectable({
  providedIn: 'root'
})
export class EventlocationService {
  constructor(private apiService: ApiService) {
  }

  eventlocation: EventLocation;

  getAll(): Observable<EventLocation[]> {
    return this.apiService.get<EventLocation[]>('eventlocation');
  }

  getById(id: number) {
    const uri = 'eventlocation';
    return this.apiService.get(uri, id).pipe(first());
  }

  updateCustomer(updatedCustomer: EventLocation): Observable<EventLocation> {
    const uri = 'eventlocation/';
    return this.apiService.put<EventLocation>(uri + updatedCustomer.id, updatedCustomer);
  }

  save(eventLocation: any): Observable<object> {
    const uri = 'eventlocation';
    return this.apiService.post(uri, eventLocation);
  }

  delete(id: number) {
    const uri = 'eventlocation/';
    return this.apiService.delete<void>(uri + id);
  }
}
