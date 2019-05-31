import {Component, OnInit} from '@angular/core';
import {Globals} from '../globals';

@Component({
  selector: 'app-homepage-eventmanager',
  templateUrl: './homepage-eventmanager.component.html',
  styleUrls: ['./homepage-eventmanager.component.scss']
})
export class HomepageEventmanagerComponent implements OnInit {

  constructor(private globals: Globals) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('homeeventmanager');
  }

}
