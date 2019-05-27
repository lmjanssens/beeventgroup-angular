import {Component, OnInit} from '@angular/core';
import {Globals} from '../globals';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],

})
export class HomepageComponent implements OnInit {
  images = ['../assets/img/img4.jpg', '../assets/img/img1.png', '../assets/img/img2.jpg', '../assets/img/img3.jpg'];
  i = 0;

  constructor(private globals: Globals) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('homePage');
  }

  changeImageNext() {
    this.i++;
    if (this.i === this.images.length) {
      this.i = 0;
    }
    const a = document.getElementById('image');
    if (a instanceof HTMLImageElement) {
      a.src = this.images[this.i];
    }
  }


  changeImagePrev() {
    this.i--;
    if (this.i < 0) {
      this.i = this.images.length - 1;
    }
    const a = document.getElementById('image');
    if (a instanceof HTMLImageElement) {
      a.src = this.images[this.i];
    }

  }

  onClickEventmanager() {
    this.globals.setWaarde(1);
    // this.globals.setHuidigePagina('loginPage');
  }


  onClickInstructeur() {
    this.globals.setWaarde(2);
    // this.globals.setHuidigePagina('loginPage');
  }
}
