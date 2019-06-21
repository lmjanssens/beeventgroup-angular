import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {ApiService} from '../api.service';
import {AuthorizationService} from '../authorization.service';
import {EmployeeService} from '../employee.service';
import {Employee} from '../../models/employee.model';
import {User} from '../../models/user.model';

describe('EmployeeService', () => {
  let httpTestingController: HttpTestingController;
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService, ApiService, AuthorizationService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(EmployeeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should correctly return all employees', () => {
    service.getAll().subscribe();

    const call = httpTestingController.expectOne('http://localhost:8080/api/employees', 'Calling API');
    expect(call.request.method).toBe('GET');
  });

  it('should delete the given employee', () => {
    service.delete(3).subscribe((id: number) => {
      expect(id).toBe(3);
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/employees/3', 'Deleterequest to API');
    expect(call.request.method).toBe('DELETE');

    call.flush(3);
  });

  it('should correctly return a specific employee', () => {
    service.getById(3).subscribe((employee: Employee) => {
      expect(employee.first_name).toBe('Luuk');
      expect(employee.last_name).toBe('Janssens');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/employees/3', 'Calling API');
    expect(call.request.method).toBe('GET');

    call.flush({
      user_id: new User(1, 'Luuk', 'password', null),
      first_name: 'Luuk',
      infix: null,
      last_name: 'Janssens',
      email_addresses: null,
      phone_numbers: null
    });
  });

  it('should post an employee', () => {
    const mockUser = new User(1, 'Luuk', 'password', null);
    const mockEmployee = new Employee(3, mockUser, 'Luuk', null,
      'Janssens', null, null
    );

    service.save(mockEmployee).subscribe((employee: Employee) => {
      expect(employee.first_name).toEqual('Luuk');
      expect(employee.last_name).toEqual('Janssens');
      expect(employee.user_id.username).toEqual('Luuk');
      expect(employee.user_id.password).toEqual('password');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/employees', 'Pos to API');
    expect(call.request.method).toBe('POST');

    call.flush(mockEmployee);
  });

  it('should update an employee', () => {
    const mockEmployee = service.getEmptyEmployee();

    service.updateEmployee(mockEmployee).subscribe((employee: Employee) => {
      expect(employee.first_name).toEqual('Karel');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/employees/' + mockEmployee.employee_id, 'Put to API');
    expect(call.request.method).toBe('PUT');

    call.flush({
      first_name: 'Karel'
    });
  });
});
