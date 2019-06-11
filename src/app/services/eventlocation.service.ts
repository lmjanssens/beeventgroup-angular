import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {EventLocation} from '../models/event-location.model';

@Injectable({
  providedIn: 'root'
})
export class EventlocationService extends AbstractService<EventLocation> {
  constructor(http: HttpClient) {
    super(http, 'eventlocation/');
  }
}
