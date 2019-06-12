import {Injectable} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {first, retry, tap} from 'rxjs/operators';
import {ApiService} from './api.service';
import {Instructor} from '../models/instructor.model';

@Injectable({
  providedIn: 'root'
})

export class InstructorService {

  constructor(private apiService: ApiService) {
  }

  instructor: Instructor;

  getAll(): Observable<Instructor[]> {
    return this.apiService.get<Instructor[]>('instructors');
  }

  getById(id: number) {
    const uri = 'instructors';
    return this.apiService.get(uri, id).pipe(first());
  }

  updateInstructor(updatedInstructor: Instructor): Observable<Instructor> {
    const uri = 'instructors/';
    return this.apiService.put<Instructor>(uri + updatedInstructor.instructor_id, updatedInstructor);
  }

  save(instructor: any): Observable<object> {
    const uri = 'instructors';
    return this.apiService.post(uri, instructor);
  }


  delete(id: number) {
    const uri = 'instructors/';
    return this.apiService.delete(uri + id);
  }
}
