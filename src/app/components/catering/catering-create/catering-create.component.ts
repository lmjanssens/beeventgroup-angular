import {Component, OnInit} from '@angular/core';
import {Catering} from '../../../models/catering.model';
import {Globals} from '../../globals';
import {Router} from '@angular/router';
import {CateringService} from '../../../services/catering.service';
import {Supplier} from '../../../models/supplier.model';
import {SupplierService} from '../../../services/supplier.service';
import {NgForm} from '@angular/forms';
import {SupplierEmail} from '../../../models/supplier-email.model';
import {SupplierAddress} from '../../../models/supplier-address.model';
import {SupplierPhone} from '../../../models/supplier-phone.model';

@Component({
  selector: 'app-catering-create',
  templateUrl: './catering-create.component.html',
  styleUrls: ['./catering-create.component.css']
})
export class CateringCreateComponent implements OnInit {
  private catering: Catering;
  selectedSupplier: any;
  private supplierList: Supplier[];

  constructor(private globals: Globals,
              private cateringService: CateringService, private router: Router, private supplierService: SupplierService) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('horecaFormulier');
    this.catering = new Catering();
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
    this.cateringService.save(data, this.selectedSupplier).subscribe(() => {
      this.router.navigate(['/homeeventmanager/horecaoverview']
      );
    });
  }
}
