import {Injectable} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {Customer} from '../models/customer.model';
import {first, retry, tap} from 'rxjs/operators';
import {ApiService} from './api.service';
import {Catering} from '../models/catering.model';
import {SupplierOverviewComponent} from '../components/supplier/supplier-overview/supplier-overview.component';
import {Supplier} from '../models/supplier.model';

@Injectable({
  providedIn: 'root'
})

export class CateringService {

  constructor(private apiService: ApiService) {
  }

  newCatering: Catering;
  catering: Catering;

  getAll(): Observable<Catering[]> {
    return this.apiService.get<Catering[]>('caterings');
  }

  getById(id: number) {
    const uri = 'caterings';
    return this.apiService.get(uri, id).pipe(first());
  }

  updateCatering(updatedCatering: Catering, supplier: Supplier): Observable<Catering> {
    const uri = 'caterings/';
    return this.apiService.put<Catering>(uri + updatedCatering.id + '/' + supplier.supplierid, updatedCatering);
  }

  save(catering: any, supplier: Supplier): Observable<object> {
    const uri = 'caterings';
    return this.apiService.post(uri + '/' + supplier.supplierid, catering);
  }

  delete(id: number) {
    const uri = 'caterings/';
    return this.apiService.delete<void>(uri + id);
  }

  getEmptyCatering() {
    return this.newCatering = new Catering(null, null, null, '',
      '', '', '', '', '', 0, '');
  }
}
