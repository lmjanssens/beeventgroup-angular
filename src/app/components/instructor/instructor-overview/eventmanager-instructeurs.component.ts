import {Component, OnInit} from '@angular/core';
import {Instructor} from '../../../models/instructor.model';
import {Globals} from '../../globals';
import {NavbarComponent} from '../../../navbar/navbar.component';
import {Router} from '@angular/router';
import {InstructorService} from '../../../services/instructor.service';
import {UserService} from '../../../services/user.service';
import {AuthorizationService} from '../../../services/authorization.service';
import {Role} from '../../../enums/Role';

@Component({
  selector: 'app-eventmanager-instructeurs',
  templateUrl: './eventmanager-instructeurs.component.html',
  styleUrls: ['./eventmanager-instructeurs.component.css']
})
export class EventmanagerInstructeursComponent implements OnInit {

  public instructorList: Instructor[] = [];
  instructor: Instructor;
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;
  i = 0;

  currentUser: any;
  authenticated = false;

  constructor(private globals: Globals, private navbar: NavbarComponent,
              private router: Router,
              private instructorService: InstructorService,
              private userService: UserService,
              private authService: AuthorizationService) {

    this.authenticated = this.authService.hasAuthorization();

    this.authService.authorized$
      .subscribe(
        authorized => {
          this.updateAuthentication();
        }
      );

    this.updateAuthentication();

  }

  updateAuthentication() {
    this.authenticated = this.authService.hasAuthorization();

    if (!this.authenticated) {
      this.currentUser = {};
      return;
    }
    this.currentUser = this.authService.getAuthenticator();
  }

  nullRemover(list) {
    while (this.i < list.length) {
      if (list[this.i].infix === null) {
        list[this.i].infix = '';
      }
      this.i = this.i + 1;
    }
    return list;
  }

  onDelete(id, lastName, infix, firstName) {
    if (infix === '' || infix === undefined) {
      if (!confirm(`Wilt u de instructeur "${firstName + ' ' + lastName}" verwijderen ?`)) {
        return;
      }
    } else {
      if (!confirm(`Wilt u de instructeur "${firstName + ' ' + infix + ' ' + lastName}" verwijderen ?`)) {
        return;
      }
    }
    this.instructorService.delete(id).subscribe(() => {
      this.instructorService.getAll().subscribe(customer => this.instructorList = this.sortByName(this.nullRemover(customer)));
    });
  }

  sortByName(list) {
    list.sort((a, b) => (
      a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0)).sort((a, b) => (
      a.infix > b.infix ? 1 : b.infix > a.infix ? -1 : 0))
      .sort((a, b) => (
        a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0));
    return list;
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Instructeurs');
    this.navbar.checkNavBarStyle();
    this.instructorService.getAll().subscribe(instructor => this.instructorList = this.sortByName(this.nullRemover(instructor)));
    this.instructorService.getAll().subscribe(instructor => console.log(instructor));
  }

  test(id) {
    console.log(id);
  }

  getRoles() {
    return Role;
  }

}


