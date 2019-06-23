import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {ApiService} from '../api.service';
import {AuthorizationService} from '../authorization.service';
import {InstructorService} from '../instructor.service';
import {Instructor} from '../../models/instructor.model';
import {User} from '../../models/user.model';

describe('InstructorService', () => {
  let httpTestingController: HttpTestingController;
  let service: InstructorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstructorService, ApiService, AuthorizationService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(InstructorService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should correctly return all instructors', () => {
    service.getAll().subscribe();

    const call = httpTestingController.expectOne('http://localhost:8080/api/instructors', 'Calling API');
    expect(call.request.method).toBe('GET');
  });

  it('should correctly return a specific instructor', () => {
    service.getById(3).subscribe((instructor: Instructor) => {
      expect(instructor.first_name).toBe('Luuk');
      expect(instructor.last_name).toBe('Janssens');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/instructors/3', 'Calling API');
    expect(call.request.method).toBe('GET');

    call.flush({
      user_id: new User(3, 'Luuk', 'password', null),
      first_name: 'Luuk',
      infix: null,
      last_name: 'Janssens',
      phone_numbers: '0642800851',
      email_address: 'testen@isleuk.nl'
    });
  });

  it('should delete the given instructor', () => {
    service.delete(3).subscribe((id: number) => {
      expect(id).toBe(3);
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/instructors/3', 'Deleterequest to API');
    expect(call.request.method).toBe('DELETE');

    call.flush(3);
  });

  it('should post an instructor', () => {
    const mockUser = new User(3, 'Luuk', 'password', null);
    const mockInstructor = new Instructor(3, mockUser, 'Luuk', null, ''
      + 'Janssens', '0642800851', 'testen@isleuk.nl', 'Leuke notitie!!');

    service.save(mockInstructor).subscribe((instructor: Instructor) => {
      expect(instructor.first_name).toEqual('Luuk');
      expect(instructor.last_name).toEqual('Janssens');
      expect(instructor.user_id.username).toEqual('Luuk');
      expect(instructor.user_id.password).toEqual('password');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/instructors', 'Post to API');
    expect(call.request.method).toBe('POST');

    call.flush(mockInstructor);
  });

  it('should update an instructor', () => {
    const mockInstructor = service.getEmptyInstructor();

    service.updateInstructor(mockInstructor).subscribe((instructor: Instructor) => {
      expect(instructor.first_name).toEqual('Michiel');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/instructors/' + mockInstructor.instructor_id, 'Put to API');
    expect(call.request.method).toBe('PUT');

    call.flush({
      first_name: 'Michiel'
    });
  });
});
