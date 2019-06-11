import {Component, OnInit} from '@angular/core';
import {Globals} from '../components/globals';
import {Router} from '@angular/router';
import {AuthorizationService} from "../services/authorization.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private globals: Globals,
              private router: Router,
              private authService: AuthorizationService) {
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
    if (this.globals.getHuidigePagina() === 'homeeventmanager') {
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
      this.globals.getHuidigePagina() === 'instructeurFormulier') {
      this.globals.getHuidigePagina() === 'klantupdate') {
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
      this.globals.getHuidigePagina() === 'Werknemers') {
      this.router.navigate(['/homeeventmanager']);
    }
    if (this.globals.getHuidigePagina() === 'klantenFormulier' || 'klantupdate') {
      this.router.navigate(['/homeeventmanager/customeroverview']);
    }
    if (this.globals.getHuidigePagina() === 'instructeurFormulier') {
      this.router.navigate(['/homeeventmanager/instructeursoverview']);
    }
  }

  OnLogOut() {
    this.authService.deleteAuthorization();
    this.router.navigate(['/']);
  }
}
