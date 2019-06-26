import { Component, Input, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { Email } from '../../models/email.model';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  emailtexts: Email[] = [];
  emailId: number;

  @Input()
  order: Order;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService.getAll().subscribe((data: Email[]) => {
      this.emailtexts = data;
    });
  }

  send() {
    this.emailService.render(this.emailId, this.order.orderId).subscribe((data: string) => {
      window.location.href = 'mailto:' + this.order.customer.email_addresses[0].email + '?subject=' + this.emailtexts[this.emailId].emailType + '&body=' + data;
    });
  }

}
