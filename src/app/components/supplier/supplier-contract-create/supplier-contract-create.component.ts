import { Component, OnInit } from '@angular/core';
import {SupplierService} from '../../../services/supplier.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Supplier} from '../../../models/supplier.model';
import {NgForm} from '@angular/forms';
import {Globals} from '../../globals';
import {SupplierContract} from '../../../models/supplier-contract.model';

@Component({
  selector: 'app-supplier-contract-create',
  templateUrl: './supplier-contract-create.component.html',
  styleUrls: ['./supplier-contract-create.component.css']
})
export class SupplierContractCreateComponent implements OnInit {
  supplier: Supplier = new Supplier();
  contract: SupplierContract = new SupplierContract();
  loading: true;
  currentId;
  currentContractId;
  private sub: any;
  newContract: any;

  constructor(private globals: Globals, private supplierService: SupplierService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.supplierid;
      this.currentContractId = params.id;
      console.log(this.currentId + this.currentContractId);
      this.supplierService.getById(this.currentId).subscribe(supplier => {
        this.supplier = supplier;
      });
    });
  }
  ngSubmit(f: NgForm) {
    this.newContract = new SupplierContract();
    this.newContract.supplierid = this.supplier.supplierid
    this.newContract.type = this.contract.type;
    this.newContract.title = this.contract.title;
    this.newContract.description = this.contract.description;
    this.newContract.inclubtw = this.contract.inclubtw;
    this.newContract.exclubtw = this.contract.exclubtw;
    this.newContract.btw_percentage = this.contract.btw_percentage;
    this.newContract.pre_conditions = this.contract.pre_conditions;
    this.newContract.insurance = this.contract.insurance;
    this.newContract.responsibility = this.contract.responsibility;
    this.newContract.extras = this.contract.extras;
    this.newContract.startDate = this.contract.startDate;
    this.newContract.endDate = this.contract.endDate;
    this.supplier.contracts.push(this.newContract);
    const data = JSON.parse(JSON.stringify(this.supplier)) as any;
    console.log(data);
    this.supplierService.updateSupplier(data).subscribe(() => {
      this.router.navigate(['/homeeventmanager/supplieroverview']);
    });
  }
}
