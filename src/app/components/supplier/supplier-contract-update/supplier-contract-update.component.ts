import {Component, OnInit} from '@angular/core';
import {SupplierService} from '../../../services/supplier.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Supplier} from '../../../models/supplier.model';
import {NgForm} from '@angular/forms';
import {Globals} from '../../globals';
import {SupplierContract} from '../../../models/supplier-contract.model';
import {SupplierContractOption} from '../../../models/supplier-contract-option.model';

@Component({
  selector: 'app-supplier-contract-update',
  templateUrl: './supplier-contract-update.component.html',
  styleUrls: ['./supplier-contract-update.component.css']
})
export class SupplierContractUpdateComponent implements OnInit {
  supplier: Supplier;
  contracts: SupplierContract[] = [];
  contract: SupplierContract = new SupplierContract();
  loading: true;
  currentId;
  currentContractId;
  option: SupplierContractOption;
  optionList: SupplierContractOption[] = [];
  private sub: any;
  optionString = '';

  constructor(private globals: Globals, private supplierService: SupplierService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('contractFormulier');
    this.supplier = this.supplierService.getEmptySupplier();

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.supplierid;
      this.currentContractId = params.id;
      this.supplierService.getById(this.currentId).subscribe(supplier => {
        this.supplier = supplier;
        this.contracts = this.supplier.contracts;
        for (let a of this.contracts) {
          if (a.id.toString() === this.currentContractId) {
            this.contract = a;
            // this.optionString = this.contract.options[0].option;
          }
        }

      });
    });
  }

  onCreateOption() {
    this.option = new SupplierContractOption();
    this.option.option = this.optionString;
    this.optionString = '';
    this.optionList.push(this.option);
  }


  onDeleteOption(option) {
    this.contract.options.splice(this.contract.options.indexOf(option), 1);
  }

  ngSubmit(f: NgForm) {
    this.contract.options = this.optionList;
    for (let a of this.supplier.contracts) {
      if (a.id.toString() === this.currentContractId) {
        a.options = this.contract.options;
      }
    }
    const data = JSON.parse(JSON.stringify(this.supplier)) as any;
    this.optionList.forEach(option => {
      this.supplierService.updateSupplier(data).subscribe(() => {});
      this.router.navigate(['/homeeventmanager/supplieroverview/suppliercontract/', this.currentId]);
    });
    // window.location.reload();
    this.optionList = [];
  }
}

