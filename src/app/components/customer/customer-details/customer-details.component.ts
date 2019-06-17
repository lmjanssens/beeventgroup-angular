import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Globals} from '../../globals';
import {Customer} from '../../../models/customer.model';
import {CustomerService} from '../../../services/customer.service';
import {Location} from '@angular/common';

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

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute, private router: Router, private globals: Globals, private location: Location) {
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
}
