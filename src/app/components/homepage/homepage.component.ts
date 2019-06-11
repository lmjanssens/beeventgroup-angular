import {Component, OnInit} from '@angular/core';
import {Globals} from '../globals';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../services/authorization.service';
import {Role} from "../../enums/Role";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],

})
export class HomepageComponent implements OnInit {
  images = ['../assets/img/img4.jpg', '../assets/img/img1.png', '../assets/img/img2.jpg', '../assets/img/img3.jpg'];
  i = 0;

  currentUser: any;
  authenticated = false;

  constructor(private globals: Globals,
              private router: Router,
              private authService: AuthorizationService) {
    this.authenticated = authService.hasAuthorization();

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

    if (this.currentUser != null && this.currentUser.role === Role.ADMIN || this.currentUser != null && this.currentUser.role === Role.EMPLOYEE) {
      this.router.navigate(['/homeeventmanager']);
    }
    // else if (this.currentUser.role === Role.INSTRUCTOR) {
    //   this.router.navigate([''])
    // }
  }



  ngOnInit() {
    this.globals.setHuidigePagina('homePage');
  }

  changeImageNext() {
    this.i++;
    if (this.i === this.images.length) {
      this.i = 0;
    }
    const a = document.getElementById('image');
    if (a instanceof HTMLImageElement) {
      a.src = this.images[this.i];
    }
  }


  changeImagePrev() {
    this.i--;
    if (this.i < 0) {
      this.i = this.images.length - 1;
    }
    const a = document.getElementById('image');
    if (a instanceof HTMLImageElement) {
      a.src = this.images[this.i];
    }

  }

  onClickEventmanager() {
    this.globals.setWaarde(1);
    // this.globals.setHuidigePagina('loginPage');
  }


  onClickInstructeur() {
    this.globals.setWaarde(2);
    // this.globals.setHuidigePagina('loginPage');
  }
}
