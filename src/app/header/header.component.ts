import {Component, OnInit} from '@angular/core';
import {Globals} from '../components/globals';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private globals: Globals, private router: Router) {
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
      this.globals.getHuidigePagina() === 'Werknemers') {
      document.getElementById('backIcon').style.visibility = 'visible';
      document.getElementById('uitlogKnop').style.visibility = 'visible';
      document.getElementById('terugKnop').style.cursor = 'pointer';

    }
  }

  terug() {
    if (this.globals.getHuidigePagina() === 'loginPage') {
      this.router.navigate(['/']);
    }
    if (this.globals.getHuidigePagina() === 'Klanten' ||
      this.globals.getHuidigePagina() === 'Reserveringen' ||
      this.globals.getHuidigePagina() === 'Evenementen' ||
      this.globals.getHuidigePagina() === 'Leveranciers' ||
      this.globals.getHuidigePagina() === 'Horeca' ||
      this.globals.getHuidigePagina() === 'Instructeurs' ||
      this.globals.getHuidigePagina() === 'Werknemers') {
      this.router.navigate(['/homeeventmanager']);
    }
  }
}
