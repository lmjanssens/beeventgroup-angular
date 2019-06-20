import {Component, OnInit} from '@angular/core';
import {Globals} from '../components/globals';
import {Router} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';
import {Role} from '../enums/Role';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: any;

  constructor(private globals: Globals,
              private router: Router,
              private authService: AuthorizationService) {

    this.currentUser = this.authService.getAuthenticator();
  }

  ngOnInit() {
    this.checkHeaderStyle();
  }

  checkHeaderStyle() {
    document.getElementById('backIcon').style.visibility = 'hidden';
    document.getElementById('uitlogKnop').style.visibility = 'hidden';
    document.getElementById('terugKnop').style.cursor = 'default';
    if (this.globals.getHuidigePagina() === 'loginPage') {
      document.getElementById('backIcon').style.visibility = 'visible';
      document.getElementById('terugKnop').style.cursor = 'pointer';
      document.getElementById('uitlogKnop').style.visibility = 'hidden';
    }
    if (this.globals.getHuidigePagina() === 'homeeventmanager' ||
      this.globals.getHuidigePagina() === 'homeinstructor') {
      document.getElementById('uitlogKnop').style.visibility = 'visible';
    }
    if (this.globals.getHuidigePagina() === 'Klanten' ||
      this.globals.getHuidigePagina() === 'Reserveringen' ||
      this.globals.getHuidigePagina() === 'Evenementen' ||
      this.globals.getHuidigePagina() === 'Leveranciers' ||
      this.globals.getHuidigePagina() === 'Horeca' ||
      this.globals.getHuidigePagina() === 'Instructeurs' ||
      this.globals.getHuidigePagina() === 'Werknemers' ||
      this.globals.getHuidigePagina() === 'klantenFormulier' ||
      this.globals.getHuidigePagina() === 'instructeurFormulier' ||
      this.globals.getHuidigePagina() === 'horecaFormulier' ||
      this.globals.getHuidigePagina() === 'evenementFormulier' ||
      this.globals.getHuidigePagina() === 'eventupdate' ||
      this.globals.getHuidigePagina() === 'klantupdate' ||
      this.globals.getHuidigePagina() === 'htmlFormulier' ||
      this.globals.getHuidigePagina() === 'werknemerFormulier' ||
      this.globals.getHuidigePagina() === 'leverancierFormulier' ||
      this.globals.getHuidigePagina() === 'reserveringFormulier' ||
      this.globals.getHuidigePagina() === 'Agenda' ||
      this.globals.getHuidigePagina() === 'quotation' ||
      this.globals.getHuidigePagina() === 'htmlFormulier'
    ) {
      document.getElementById('backIcon').style.visibility = 'visible';
      document.getElementById('uitlogKnop').style.visibility = 'visible';
      document.getElementById('terugKnop').style.cursor = 'pointer';
    }
  }

  terug() {
    if (this.globals.getHuidigePagina() === 'loginPage') {
      this.router.navigate(['/']);
    }
    if (this.globals.getHuidigePagina() === 'Reserveringen' ||
      this.globals.getHuidigePagina() === 'Evenementen' ||
      this.globals.getHuidigePagina() === 'Leveranciers' ||
      this.globals.getHuidigePagina() === 'Horeca' ||
      this.globals.getHuidigePagina() === 'Instructeurs' ||
      this.globals.getHuidigePagina() === 'Werknemers' ||
      this.globals.getHuidigePagina() === 'Klanten' ||
      this.globals.getHuidigePagina() === 'Agenda') {

      if (this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.EMPLOYEE) {
        this.router.navigate(['/homeeventmanager']);
      } else {
        this.router.navigate(['/homeinstructor']);
      }
    }
    if (this.globals.getHuidigePagina() === 'klantenFormulier' && this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.EMPLOYEE) {
      this.router.navigate(['/homeeventmanager/customeroverview']);
    }
    if (this.globals.getHuidigePagina() === 'instructeurFormulier' && this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.EMPLOYEE) {
      this.router.navigate(['/homeeventmanager/instructeursoverview']);
    }
    if (this.globals.getHuidigePagina() === 'horecaFormulier') {
      this.router.navigate(['/homeeventmanager/horecaoverview']);
    }
    if (this.globals.getHuidigePagina() === 'evenementFormulier' || this.globals.getHuidigePagina() === 'eventupdate' && this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.EMPLOYEE) {
      this.router.navigate(['/homeeventmanager/evenementenoverview']);
    }
    if (this.globals.getHuidigePagina() === 'werknemerFormulier' && this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.EMPLOYEE) {
      this.router.navigate(['/homeeventmanager/werknemersoverview']);
    }
    if (this.globals.getHuidigePagina() === 'leverancierFormulier' && this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.EMPLOYEE) {
      this.router.navigate(['/homeeventmanager/supplieroverview']);
    }
    if (this.globals.getHuidigePagina() === 'htmlFormulier ' && this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.EMPLOYEE) {
      this.router.navigate(['/homeeventmanager/reserveringenoverview']);
    }
    if (this.globals.getHuidigePagina() === 'reserveringFormulier' && this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.EMPLOYEE) {
      this.router.navigate(['/homeeventmanager/reserveringenoverview']);
    }
    if (this.globals.getHuidigePagina() === 'quotation' && this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.EMPLOYEE) {
      this.router.navigate(['/homeeventmanager/reserveringenoverview']);
    }
    if (this.globals.getHuidigePagina() === 'htmlFormulier' && this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.EMPLOYEE) {
      this.router.navigate(['/homeeventmanager/reserveringenoverview']);
    }
  }

  OnLogOut() {
    this.authService.deleteAuthorization();
    this.router.navigate(['/']);
  }
}
