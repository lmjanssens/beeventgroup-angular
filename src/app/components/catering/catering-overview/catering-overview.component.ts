import {Component, OnInit} from '@angular/core';
import {Catering} from '../../../models/catering.model';
import {Globals} from '../../globals';
import {NavbarComponent} from '../../../navbar/navbar.component';
import {CateringService} from '../../../services/catering.service';

@Component({
  selector: 'app-catering-overview',
  templateUrl: './catering-overview.component.html',
  styleUrls: ['./catering-overview.component.css']
})
export class CateringOverviewComponent implements OnInit {
  public cateringList: Catering[] = [];
  firstPage = 1;
  itemsPerPage = 5;
  searchTerm: string;
  catering: Catering;

  constructor(private globals: Globals, private navbar: NavbarComponent, private cateringService: CateringService) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('Horeca');
    this.navbar.checkNavBarStyle();
    console.log(this.globals.getHuidigePagina());
    this.cateringService.getAll().subscribe(catering => {
      this.cateringList = this.sortByName(catering);
    });
  }

  sortByName(list) {
    list.sort((a, b) => (
      a.cateringName > b.cateringName ? 1 : b.cateringName > a.cateringName ? -1 : 0));
    return list;
  }

  onDelete(id, name) {
    if (!confirm(`Wilt u de horeca "${name}" verwijderen ?`)) {
      return;
    }
    this.cateringService.delete(id).subscribe(() => {
      this.cateringService.getAll().subscribe(catering => {
        this.cateringList = this.sortByName(catering);
      });
    });
  }
}
