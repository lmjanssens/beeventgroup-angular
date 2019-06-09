import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {Event} from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService extends AbstractService<Event> {
  constructor(http: HttpClient) {
    super(http, 'events/');
  }
}
