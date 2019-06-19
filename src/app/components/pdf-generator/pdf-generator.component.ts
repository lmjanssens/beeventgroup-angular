import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Globals} from '../globals';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css']
})
export class PdfGeneratorComponent implements OnInit {

  constructor(private globals: Globals) {
  }


  ngOnInit() {
    this.globals.setHuidigePagina('htmlFormulier');
  }

  downloadPDF() {
    const doc = new jsPDF('p', 'pt', 'A4');
    doc.fromHTML(document.getElementById('content'), 15, 15, null, function (dispose) {
      doc.save('test12456.pdf');
    });
    console.log('Callback');
    // doc.save('tesSt.pdf');
  }
}
