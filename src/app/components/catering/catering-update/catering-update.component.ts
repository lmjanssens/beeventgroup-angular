import {Component, OnInit} from '@angular/core';
import {Catering} from '../../../models/catering.model';
import {Supplier} from '../../../models/supplier.model';
import {CateringService} from '../../../services/catering.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Globals} from '../../globals';
import {SupplierService} from '../../../services/supplier.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-catering-update',
  templateUrl: './catering-update.component.html',
  styleUrls: ['./catering-update.component.css']
})
export class CateringUpdateComponent implements OnInit {

  catering = new Catering();
  supplier = new Supplier();
  private sub: any;
  currentId: number;
  private supplierList: Supplier[] = [];
  selectedSupplier: any;

  constructor(private cateringService: CateringService,
              private route: ActivatedRoute, private router: Router, private globals: Globals, private supplierService: SupplierService) {
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
    this.fetchSuppliers();
  }

  fetchSuppliers() {
    this.supplierService.getAll().subscribe(suppliers => {
      this.supplierList = suppliers;
    });
  }


  getSuppliers(): Supplier[] {
    return this.supplierList;
  }

  ngSubmit(f: NgForm) {
    this.catering.supplier = this.selectedSupplier;
    const data = JSON.parse(JSON.stringify(this.catering)) as any;
    console.log(data);
    this.cateringService.updateCatering(data, this.selectedSupplier).subscribe(() => {
      this.router.navigate(['/homeeventmanager/horecaoverview']
      );
    });
  }
}
