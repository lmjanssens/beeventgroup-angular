import {Component, OnInit} from '@angular/core';
import {Catering} from '../../../models/catering.model';
import {Globals} from '../../globals';
import {Router} from '@angular/router';
import {CateringService} from '../../../services/catering.service';

@Component({
  selector: 'app-catering-create',
  templateUrl: './catering-create.component.html',
  styleUrls: ['./catering-create.component.css']
})
export class CateringCreateComponent implements OnInit {
  private catering: Catering;

  constructor(private globals: Globals,
              private cateringService: CateringService, private router: Router) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('horecaFormulier');
    this.catering = new Catering();
  }

}
