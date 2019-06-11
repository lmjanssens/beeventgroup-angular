import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals';
import {AuthorizationService} from '../../services/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage-instructor',
  templateUrl: './homepage-instructor.component.html',
  styleUrls: ['./homepage-instructor.component.css']
})
export class HomepageInstructorComponent implements OnInit {

  currentUser: any;
  authenticated = false;

  constructor(private globals: Globals,
              private router: Router,
              private authService: AuthorizationService) {

    this.authenticated = this.authService.hasAuthorization();

    this.authService.authorized$.subscribe(
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

  ngOnInit() {
    this.globals.setHuidigePagina('homeinstructor');
  }

}
