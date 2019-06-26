import {Component, OnInit} from '@angular/core';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';

@Component({
  selector: 'app-mail-update',
  templateUrl: './mail-update.component.html',
  styleUrls: ['./mail-update.component.css']
})
export class MailUpdateComponent implements OnInit {

  constructor(private globals: Globals, private navbar: NavbarComponent) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Mailen');
    this.navbar.checkNavBarStyle();
  }
}
