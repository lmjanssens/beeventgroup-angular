import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Globals} from '../../globals';
import {Customer} from '../../../models/customer.model';
import {CustomerService} from '../../../services/customer.service';
import {Location} from '@angular/common';
import {Role} from '../../../enums/Role';
import {AuthorizationService} from '../../../services/authorization.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer = new Customer();
  user = new User();
  private sub: any;
  currentId: number;
  currentUser: any;
  authenticated = false;

  constructor(private customerService: CustomerService, private authService: AuthorizationService,
              private route: ActivatedRoute, private router: Router, private globals: Globals, private location: Location) {
    this.authenticated = this.authService.hasAuthorization();
    this.authService.authorized$.subscribe(
      authorized => {
        this.updateAuthentication();
      }
    );

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
    this.globals.setHuidigePagina('klantenFormulier');

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.customer_id;
      console.log(this.currentId);
      this.customerService.getById(this.currentId).subscribe(customer => {
        this.customer = customer;
      });
    });
  }

  onDelete() {
    if (!confirm(`Wilt u de klant "${this.customer.first_name + ' ' + this.customer.last_name}" verwijderen ?`)) {
      return;
    }
    this.customerService.delete(this.currentId).subscribe(() => {
      this.location.back();
    });
  }

  getRoles() {
    return Role;
  }
}
