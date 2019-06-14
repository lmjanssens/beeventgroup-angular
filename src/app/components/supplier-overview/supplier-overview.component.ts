import {Component, Injectable, OnInit} from '@angular/core';
import {Supplier} from '../../models/supplier.model';
import {Globals} from '../globals';
import {NavbarComponent} from '../../navbar/navbar.component';
import {SupplierService} from '../../services/supplier.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-supplier-overview',
  templateUrl: './supplier-overview.component.html',
  styleUrls: ['./supplier-overview.component.css']
})

export class SupplierOverviewComponent implements OnInit {
  public supplierList: Supplier[] = [];
  i = 0;
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;
  supplier: Supplier = new Supplier();
  constructor(private globals: Globals, private navbar: NavbarComponent, private router: Router, private supplierService: SupplierService) {
  }

  nullRemover(list) {
    while (this.i < list.length) {
      if (list[this.i].infix === null) {
        list[this.i].infix = '';
      }
      this.i = this.i + 1;
    }
    console.log(list);
    return list;
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Leveranciers');
    this.navbar.checkNavBarStyle();
    this.supplierService.getAll().subscribe(supplier => this.supplierList = this.sortByName(this.nullRemover(supplier)));
  }

  sortByName(list) {
    list.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return list;
  }

  onDelete(supplierid, name) {
    if (!confirm(`Wilt u de leverancier "${name}" verwijderen ?`)) {
      return;
    }
    this.supplierService.delete(supplierid).subscribe(() => {
      console.log('Supplier with supplierid ' + supplierid + ' is deleted.');
      this.supplierService.getAll().subscribe(supplier => this.supplierList = this.sortByName(this.nullRemover(supplier)));
    });
  }
  test(a) {
    console.log('TEST' + a);
  }

}
