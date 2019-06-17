import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Globals} from '../../globals';
import {Catering} from '../../../models/catering.model';
import {Supplier} from '../../../models/supplier.model';
import {CateringService} from '../../../services/catering.service';

@Component({
  selector: 'app-catering-details',
  templateUrl: './catering-details.component.html',
  styleUrls: ['./catering-details.component.css']
})
export class CateringDetailsComponent implements OnInit {
  catering = new Catering();
  supplier = new Supplier();
  private sub: any;
  currentId: number;

  constructor(private cateringService: CateringService,
              private route: ActivatedRoute, private router: Router, private globals: Globals) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('horecaFormulier');

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.id;
      console.log(this.currentId);
      this.cateringService.getById(this.currentId).subscribe(catering => {
        this.catering = catering;
      });
    });
  }

}
