import {Injectable} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {first, retry, tap} from 'rxjs/operators';
import {ApiService} from './api.service';
import {Quotation} from '../models/quotation.model';

@Injectable({
  providedIn: 'root'
})

export class QuotationService {

  constructor(private apiService: ApiService) {
  }


  getAll(): Observable<Quotation[]> {
    return this.apiService.get<Quotation[]>('quotation');
  }

  getById(id: number) {
    const uri = 'quotation';
    return this.apiService.get(uri, id).pipe(first());
  }

  save(quotation: any): Observable<object> {
    const uri = 'quotation';
    return this.apiService.post(uri, quotation);
  }
}
