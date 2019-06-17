import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Globals} from '../globals';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css']
})
export class PdfGeneratorComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  constructor(private globals: Globals) {
  }


  ngOnInit() {
    this.globals.setHuidigePagina('htmlFormulier');
  }

  downloadPDF() {
    const doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function (elemnt, renderer) {
        return true;
      }
    };
    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }
}
