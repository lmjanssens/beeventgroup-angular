import {Component, OnInit} from '@angular/core';
import {SupplierService} from '../../../services/supplier.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Supplier} from '../../../models/supplier.model';
import {NgForm} from '@angular/forms';
import {Globals} from '../../globals';
import {SupplierContract} from '../../../models/supplier-contract.model';

@Component({
  selector: 'app-supplier-contract-update',
  templateUrl: './supplier-contract-update.component.html',
  styleUrls: ['./supplier-contract-update.component.css']
})
export class SupplierContractUpdateComponent implements OnInit {
  supplier: Supplier = new Supplier();
  contracts: SupplierContract[] = [];
  contract: SupplierContract = new SupplierContract();
  loading: true;
  currentId;
  currentContractId;
  private sub: any;

  constructor(private globals: Globals, private supplierService: SupplierService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.supplierid;
      this.currentContractId = params.id;
      console.log(this.currentId + this.currentContractId);
      this.supplierService.getById(this.currentId).subscribe(supplier => {
        this.supplier = supplier;
        this.contracts = this.supplier.contracts;
        for (let a of this.contracts) {
          if (a.id.toString() === this.currentContractId) {
            this.contract = a;
            console.log(this.contract);
          }
        }

      });
    });
  }
  ngSubmit(f: NgForm) {
    const data = JSON.parse(JSON.stringify(this.supplier)) as any;
    console.log(data);
    this.supplierService.updateSupplier(data).subscribe(() => {
      this.router.navigate(['/homeeventmanager/supplieroverview']);
    });
  }
}

