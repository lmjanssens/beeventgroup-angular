import {Component, OnInit} from '@angular/core';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {EmailService} from '../../services/email.service';
import {Email} from '../../models/email.model';
import {Role} from '../../enums/Role';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-mail-update',
  templateUrl: './mail-update.component.html',
  styleUrls: ['./mail-update.component.css']
})
export class MailUpdateComponent implements OnInit {
  emails: Email[] = [];
  stringLayout: string;
  private selectTag;
  private selectedItem;
  currentUser: any;
  private authenticated = false;
  private emailId: any;
  email: Email;
  selectedEmail: Email;

  constructor(private globals: Globals, private navbar: NavbarComponent, private emailService: EmailService, private authService: AuthorizationService) {
    this.authenticated = this.authService.hasAuthorization();
    this.authService.authorized$.subscribe(
      authorized => {
        this.updateAuthentication();
      }
    );

    this.selectedEmail = emailService.getEmptyEmployee();

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
    this.globals.setHuidigePagina('Mailen');
    this.navbar.checkNavBarStyle();
    this.fetchMails();
  }

  fetchMails() {
    this.emailService.getAll().subscribe(emails => {
      this.emails = emails;
    });
  }

  getRoles() {
    return Role;
  }

  update() {
    const data = JSON.parse(JSON.stringify(this.selectedEmail)) as any;
    this.emailService.updateEmailText(this.selectedEmail.id, data).subscribe(() => {
      console.log(data);
    });
  }
}
