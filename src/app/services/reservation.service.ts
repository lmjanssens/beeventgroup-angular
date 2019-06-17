import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {Order} from '../models/order.model';

@Injectable()
export class ReservationService {

  constructor(private apiService: ApiService) {

  }

  getAll() {
    return this.apiService.get('orders').pipe(map(this.apiService.extractData));
  }

  getById(id: number) {
    const uri = 'orders';
    return this.apiService.get(uri, id).pipe(first());
  }

  updateReservation(updatedOrder: Order): Observable<Order> {
    const uri = 'orders';
    return this.apiService.put<Order>(uri + updatedOrder.orderId, updatedOrder);
  }

  save(customer: any): Observable<object> {
    const uri = 'orders';
    return this.apiService.post(uri, customer);
  }


  delete(id: number) {
    const uri = 'orders';
    return this.apiService.delete<void>(uri, id);
  }

  /**
   * With this we want to check if the instructoris already checked in for an event.
   * @param instructor username of the instructor
   */
  checkAlreadyRegisteredEvent(orderId: number, instructor: string) {
    
    const uri = 'registeredevents/orderid';
    return this.apiService.get(uri, orderId).pipe(first());
  }

  /**
   * For subscribing an instructor to an event
   * @param orderId id of order
   * @param eventid id of event
   * @param instructor username of instructor
   */
  subscribeToEvent(orderId: number, eventid: number, instructor: string): Observable<object> {
    const uri = 'registeredevents/';
    const registeredEvent = {};
    return this.apiService.post(uri + orderId + '/' + eventid + '/' + instructor, registeredEvent);
  }

  unsubscribeToEvent(registeredEventId: number) {
    const uri = 'registeredevents';
    return this.apiService.delete(uri, registeredEventId);
  }
}
