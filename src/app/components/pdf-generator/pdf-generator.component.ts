import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css']
})
export class PdfGeneratorComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
    this.globals.setHuidigePagina('htmlFormulier');
  }

}
