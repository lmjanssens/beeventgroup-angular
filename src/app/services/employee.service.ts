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

  newEmployee: Employee;
  employee: Employee;

  getAll(): Observable<Employee[]> {
    return this.apiService.get<Employee[]>('employees');
  }

  getById(id: number): Observable<Employee> {
    return this.apiService.get<Employee>('employees/' + id).pipe(
      tap(selectedEmployee => console.log(`selectedEmployee = ${JSON.stringify(selectedEmployee)}`))
    );
  }

  updateEmployee(updatedEmployee: Employee): Observable<Employee> {
    return this.apiService.put<Employee>('employees/' + updatedEmployee.employee_id, updatedEmployee);
  }

  save(employee: any): Observable<object> {
    const uri = 'employees';
    return this.apiService.post(uri, employee);
  }

  delete(id: number) {
    return this.apiService.delete<void>('employees/' + id);
  }

  getEmptyEmployee() {
    return this.newEmployee = new Employee(null, null, '', '',
      '', null, null);
  }
}
