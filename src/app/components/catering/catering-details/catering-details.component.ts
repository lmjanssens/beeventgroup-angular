import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Globals} from '../../globals';
import {CateringService} from '../../../services/catering.service';
import {Location} from '@angular/common';
import {AuthorizationService} from '../../../services/authorization.service';
import {Role} from '../../../enums/Role';
import {SupplierService} from '../../../services/supplier.service';

@Component({
  selector: 'app-catering-details',
  templateUrl: './catering-details.component.html',
  styleUrls: ['./catering-details.component.css']
})
export class CateringDetailsComponent implements OnInit {
  catering;
  supplier;
  private sub: any;
  currentId: number;
  currentUser: any;
  authenticated = false;

  constructor(private cateringService: CateringService, private authService: AuthorizationService,
              private route: ActivatedRoute, private router: Router, private globals: Globals, private location: Location,
              private supplierService: SupplierService) {
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
    this.globals.setHuidigePagina('horecaFormulier');
    this.catering = this.cateringService.getEmptyCatering();
    this.supplier = this.supplierService.getEmptySupplier();

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.id;
      console.log(this.currentId);
      this.cateringService.getById(this.currentId).subscribe(catering => {
        this.catering = catering;
      });
    });
  }

  onDelete() {
    if (!confirm(`Wilt u de horeca "${this.catering.cateringName}" verwijderen ?`)) {
      return;
    }
    this.cateringService.delete(this.currentId).subscribe(() => {
      this.location.back();
    });
  }

  getRoles() {
    return Role;
  }
}
