import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Globals} from '../globals';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login-event-manager',
  templateUrl: './login-event-manager.component.html',
  styleUrls: ['./login-event-manager.component.scss'],
})
export class LoginEventManagerComponent implements OnInit, AfterViewInit {
  imagePath = String();
  rol = String('Eventmanager');
  loginForm: FormGroup;

  // REGEX for preventing XSS
  usernameRegex = '[\\w -]*$';

  constructor(private globals: Globals,
              private builder: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('loginPage');
    this.checkRol();

    this.loginForm = this.builder.group({
      loginUsername : ['', Validators.compose([Validators.required, Validators.pattern(this.usernameRegex)])],
      loginPassword : ['', Validators.required]
    });
  }

  getLoginFormControls() {
    return this.loginForm.controls;
  }


  ngAfterViewInit() {

  }

  checkRol() {
    if (this.globals.getWaarde() === 2) {
      this.imagePath = String('../assets/img/logoInstructeur.png');
      this.rol = String('Instructeur');
    } else {
      this.imagePath = String('../assets/img/logoEventmanager.png');
      this.rol = String('Eventmanager');
    }
  }

  OnLogin() {

    const user: User = new User();
    user.setUsername(this.getLoginFormControls().loginUsername.value);
    user.setPassword(this.getLoginFormControls().loginPassword.value);

    this.userService.login(user,false);
  }

}
