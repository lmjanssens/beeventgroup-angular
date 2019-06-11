import {Component, OnInit} from '@angular/core';
import {Globals} from '../globals';
import {Router} from "@angular/router";
import {AuthorizationService} from "../../services/authorization.service";

@Component({
  selector: 'app-homepage-eventmanager',
  templateUrl: './homepage-eventmanager.component.html',
  styleUrls: ['./homepage-eventmanager.component.scss']
})
export class HomepageEventmanagerComponent implements OnInit {

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

  private updateAuthentication() {
    this.authenticated = this.authService.hasAuthorization();

    if (!this.authenticated) {
      this.currentUser = {};

      return;
    }

    const user: any = this.authService.getAuthenticator();

    this.currentUser = user;
  }

  ngOnInit() {
    this.globals.setHuidigePagina('homeeventmanager');
  }

}
