import {Component, OnInit} from '@angular/core';
import {Globals} from '../components/globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private globals: Globals) {
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
  }
}
