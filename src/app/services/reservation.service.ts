import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {Order} from '../models/order.model';

@Injectable()
export class ReservationService {

  constructor(private apiService: ApiService) {

  }

  getAll(): Observable<Order[]> {
    return this.apiService.get<Order[]>('orders');
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

  subscribeToEvent(orderId: number, eventid: number, instructor: string): Observable<object> {
    const uri = 'registeredevents/';
    const registeredEvent = {};
    return this.apiService.post(uri + orderId + '/' + eventid + '/' + instructor, registeredEvent);
  }
}
