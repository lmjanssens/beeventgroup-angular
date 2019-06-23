import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {ApiService} from '../api.service';
import {AuthorizationService} from '../authorization.service';
import {UserService} from '../user.service';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {Routerstub} from './stubs/routerstub';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, ApiService, AuthorizationService, RouterTestingModule,
        {provide: Router, useClass: Routerstub}],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UserService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should correctly return all users', () => {
    service.getAllUsers().subscribe();

    const call = httpTestingController.expectOne('http://localhost:8080/api/users', 'Calling API');
    expect(call.request.method).toBe('GET');
  });

  it('should correctly delete a specific user', () => {
    service.deleteUser(3).subscribe((id: number) => {
      expect(id).toBe(3);
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/users/3', 'Deleterequest to API');
    expect(call.request.method).toBe('DELETE');

    call.flush(3);
  });

  it('should update a user', () => {
    const mockUser = service.getEmptyUser();
    mockUser.id = 3;

    service.updateUser(mockUser).subscribe((user: User) => {
      expect(user.username).toEqual('Gebruiker');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/users/' + mockUser.id, 'Put to API');
    expect(call.request.method).toBe('PUT');

    call.flush({
      username: 'Gebruiker'
    });
  });
});
