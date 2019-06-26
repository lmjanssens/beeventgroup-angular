import {Component, OnInit} from '@angular/core';
import {Quotation} from '../../models/quotation.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {AuthorizationService} from '../../services/authorization.service';
import {Role} from '../../enums/Role';
import {QuotationService} from '../../services/quotation.service';
import {ReservationService} from '../../services/reservation.service';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
  quotationList: Quotation[] = [];
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;
  i = 0;
  currentUser: any;
  authenticated = false;
  private sub: any;
  private currentId: any;

  constructor(private globals: Globals,
              private navbar: NavbarComponent,
              private router: Router,
              private apiService: ApiService,
              private authService: AuthorizationService,
              private quotationService: QuotationService,
              private route: ActivatedRoute,
              private orderService: ReservationService) {
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

  fetchOrders() {
    this.orderService.getById(this.currentId).subscribe(data => {
      this.quotationList[0] = data.quotations[0];
    });

  }

  getRoles() {
    return Role;
  }

  ngOnInit() {
    this.globals.setHuidigePagina('quotation');
    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.orderId;
    });

    this.fetchOrders();


  }
}
