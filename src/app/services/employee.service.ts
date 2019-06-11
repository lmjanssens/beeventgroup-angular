import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {
  }

  employee: Employee;

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.apiHostname + 'employees');
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(environment.apiHostname + 'employees/' + id).pipe(
      tap(selectedEmployee => console.log(`selectedEmployee = ${JSON.stringify(selectedEmployee)}`))
    );
  }

  updateCustomer(updatedEmployee: Employee): Observable<Employee> {
    return this.http.put<Employee>(environment.apiHostname + 'employees/' + updatedEmployee.employeeId, updatedEmployee);
  }

  save(employee: any): Observable<object> {
    return this.http.post(environment.apiHostname + 'employees/', employee);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(environment.apiHostname + 'employees/' + id);
  }
}
