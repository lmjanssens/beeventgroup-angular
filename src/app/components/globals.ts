import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Globals {
  constructor() {

  }

  waarde: number = 1;
  huidigePagina: string = 'homePage';


  getWaarde() {
    return this.waarde;
  }

  getHuidigePagina() {
    return this.huidigePagina;
  }

  setWaarde(waarde: number) {
    this.waarde = waarde;
  }

  setHuidigePagina(huidigePagina: string) {
    this.huidigePagina = huidigePagina;
  }
}
