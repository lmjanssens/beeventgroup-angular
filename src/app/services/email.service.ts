import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Email } from '../models/email.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  public newEmailText: Email;
  public emailText: Email;


  constructor(private apiService: ApiService) { }

  getAll(): Observable<Email[]> {
    return this.apiService.get<Email[]>('emailtexts');
  }

  getById(id: number): Observable<Email> {
    return this.apiService.get<Email>('emailtexts/' + id);
  }

  updateEmailText(id: number, email: Email) {
    return this.apiService.put<Email>('emailtexts/' + id, email);
  }

  save(email: Email): Observable<object> {
    return this.apiService.post('emailtexts', email);
  }

  delete(id: number) {
    return this.apiService.delete<void>('emailtexts/' + id);
  }

  getEmptyEmployee() {
    return this.newEmailText = new Email(null, null);
  }
}
