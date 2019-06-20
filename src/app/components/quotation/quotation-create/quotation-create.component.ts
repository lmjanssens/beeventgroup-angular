import {Component, OnInit} from '@angular/core';
import {Form} from '@angular/forms';
import {QuotationService} from '../../../services/quotation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ReservationService} from '../../../services/reservation.service';
import {Quotation} from '../../../models/quotation.model';

@Component({
  selector: 'app-quotation-create',
  templateUrl: './quotation-create.component.html',
  styleUrls: ['./quotation-create.component.css']
})
export class QuotationCreateComponent implements OnInit {
  quotation: Quotation = new Quotation(0, null, '', '', 0, 0);
  private currentId: any;
  sub: any;

  constructor(private quotationService: QuotationService,
              private route: ActivatedRoute,
              private orderService: ReservationService,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.orderId;
    });
  }

  ngSubmit(f: Form) {
    const data = JSON.parse(JSON.stringify(this.quotation)) as any;
    this.quotationService.save(data).subscribe(() => {
      this.router.navigate(['homeeventmanager/reserveringenoverview']);
    });
  }
}
