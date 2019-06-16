import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {ApiService} from './api.service';
import {until} from 'selenium-webdriver';
import urlIs = until.urlIs;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private apiService: ApiService) {
  }

  employee: Employee;


  getAll(): Observable<Employee[]> {
    return this.apiService.get<Employee[]>('employees');
  }

  // getById(supplierid: number): Observable<Employee> {
  //   return this.http.get<Employee>(environment.apiHostname + 'employees/' + supplierid).pipe(
  //     tap(selectedEmployee => console.log(`selectedEmployee = ${JSON.stringify(selectedEmployee)}`))
  //   );
  // }
  //
  // updateCustomer(updatedEmployee: Employee): Observable<Employee> {
  //   return this.http.put<Employee>(environment.apiHostname + 'employees/' + updatedEmployee.employeeId, updatedEmployee);
  // }
  //
  // save(employee: any): Observable<object> {
  //   return this.http.post(environment.apiHostname + 'employees/', employee);
  // }
  //
  // delete(supplierid: number): Observable<void> {
  //   return this.http.delete<void>(environment.apiHostname + 'employees/' + supplierid);
  // }
}
