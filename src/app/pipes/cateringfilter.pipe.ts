import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'cateringFilter'
})
export class CateringFilterPipe implements PipeTransform {


  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(catering => {
      const naam = catering.cateringName.toLowerCase().includes(searchTerm.toLowerCase());
      const contactPerson = catering.contactPerson.toLowerCase().includes(searchTerm.toLowerCase());
      const address = catering.address.toLowerCase().includes(searchTerm.toLowerCase());
      const city = catering.city.toLowerCase().includes(searchTerm.toLowerCase());
      // const phone = catering.phone.toLowerCase().includes(searchTerm.toLowerCase());
      // const note = catering.note.toLowerCase().includes(searchTerm.toLowerCase());
      // return (naam + contactPerson + address + city + phone + note);
      return (naam + contactPerson + address + city);

    });
  }

}
