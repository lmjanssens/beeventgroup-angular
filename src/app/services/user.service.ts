import {Router} from '@angular/router';
import {AuthorizationService} from './authorization.service';
import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private router: Router,
              private apiService: ApiService,
              private authService: AuthorizationService) {

  }

  /**
   * This is for logging in the user to dashboard
   * @param user JSON-object with credentials
   * @param remember
   * @author Robin Silverio
   */
  public login(user: User, remember: boolean) {

    this.authService.setAuthorization(user.getUsername(), user.getPassword());

    this.apiService.get<User>('users/me').subscribe
    (
      authenticator => {
        this.authService.storeAuthorization(authenticator, remember);
        this.goHome();
      },
      error => {
        alert('Incorrect wachtwoord.');
      }
    );
  }

  /**
   * For obtaining all user objects from API
   * @author Robin Silverio
   */
  public getAllUsers(): Observable<any> {
    const url = 'users';
    return this.apiService.get(url).pipe(map(this.extractData));
  }

  /**
   * For obtaining all employee objects from API
   * @author Robin Silverio
   */
  public getAllEmployees(): Observable<any> {
    const url = 'employees';
    return this.apiService.get(url).pipe(map(this.extractData));
  }

  /**
   * For obtaining all instructorobjects objects from API
   * @author Robin Silverio
   */
  public getAllInstructors(): Observable<any> {
    const url = 'instructors';
    return this.apiService.get(url).pipe(map(this.extractData));
  }

  /**
   * For deleting a user
   * @param id supplierid of a user
   * @author Robin Silverio
   */
  public deleteUser(id: string) {
    const uri = 'users';
    return this.apiService.delete(uri, id);
  }

  /**
   * For updating a user
   * @param user an user object
   * @author Robin Silverio
   */
  public updateUser(user: any) {
    const uri = 'users';
    return this.apiService.put(uri, user);
  }

  /**
   * Logout functionality to send user back to homepage
   * @author Robin Silverio
   */
  public logout() {
    this.authService.deleteAuthorization();
    this.goHome();
  }

  /**
   * This is for heading to homepage
   * @author Robin Silverio
   */
  public goHome() {
    this.router.navigate(['']);
  }

  /**
   * We use this for extracting data from API
   * @param res
   * @author Robin Silverio
   */
  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

}
