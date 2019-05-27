import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Globals} from '../globals';

@Component({
  selector: 'app-login-event-manager',
  templateUrl: './login-event-manager.component.html',
  styleUrls: ['./login-event-manager.component.scss'],
})
export class LoginEventManagerComponent implements OnInit, AfterViewInit {
  imagePath = String();
  rol = String('Eventmanager');

  constructor(private globals: Globals) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('loginPage');
    this.checkRol();
  }


  ngAfterViewInit() {

  }

  checkRol() {
    console.log(this.globals.getWaarde()
    );
    if (this.globals.getWaarde() === 2) {
      this.imagePath = String('../assets/img/logoInstructeur.png');
      this.rol = String('Instructeur');
    } else {
      this.imagePath = String('../assets/img/logoEventmanager.png');
      this.rol = String('Eventmanager');
    }
  }
}
