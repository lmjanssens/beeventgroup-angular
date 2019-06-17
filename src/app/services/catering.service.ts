import {Injectable} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {Customer} from '../models/customer.model';
import {first, retry, tap} from 'rxjs/operators';
import {ApiService} from './api.service';
import {Catering} from '../models/catering.model';

@Injectable({
  providedIn: 'root'
})

export class CateringService {

  constructor(private apiService: ApiService) {
  }

  catering: Catering;

  getAll(): Observable<Catering[]> {
    return this.apiService.get<Catering[]>('caterings');
  }

  getById(id: number) {
    const uri = 'caterings';
    return this.apiService.get(uri, id).pipe(first());
  }

  updateCustomer(updatedCatering: Catering): Observable<Catering> {
    const uri = 'caterings/';
    return this.apiService.put<Catering>(uri + updatedCatering.id, updatedCatering);
  }

  save(catering: any): Observable<object> {
    const uri = 'customers';
    return this.apiService.post(uri, catering);
  }


  delete(id: number) {
    const uri = 'caterings/';
    return this.apiService.delete<void>(uri + id);
  }
}
