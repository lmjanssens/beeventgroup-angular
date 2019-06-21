import {Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Globals} from '../globals';
import * as jsPDF from 'jspdf';
import {CustomerService} from '../../services/customer.service';
import {ReservationService} from '../../services/reservation.service';
import {Customer} from '../../models/customer.model';
import {ActivatedRoute} from '@angular/router';
import {Order} from '../../models/order.model';
import {EventService} from '../../services/event.service';
import {Quotation} from '../../models/quotation.model';
import {QuotationService} from '../../services/quotation.service';
import {ImageUploadComponent} from '../image-upload/image-upload.component';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css']
})
export class PdfGeneratorComponent implements OnInit {

  customer: Customer = new Customer();
  order: Order = new Order(null, null, null, null, null, null, null, null, 0, null, null);
  private sub: any;
  currentId: any;
  currenQuotationId: any;
  public imagePath;
  imgURL: any;
  public message: string;


  constructor(private globals: Globals, private quotationService: QuotationService, private  reservationService: ReservationService, private customerService: CustomerService, private reserviationService: ReservationService, private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('htmlFormulier');
    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.orderId;
      this.reservationService.getById(this.currentId).subscribe(order => {
        this.order = order;
        this.customer = order.customer;
        this.order.event = order.event;
        this.order.cateringOrders = order.cateringOrders;
        console.log(order.cateringOrders);
        this.order.quotations = order.quotations;
        this.imgURL = this.order.event.eventImages[0].imagePath;
      });
    });

  }

  preview(files) {
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  downloadPDF() {
    const doc = new jsPDF('p', 'pt', 'A4');
    doc.fromHTML(document.getElementById('content'), 15, 15, null, function (dispose) {
      doc.save('test12456.pdf');
    });

  }
}
