import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'supplierFilter'
})
export class SupplierFilterPipe implements PipeTransform {


  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(supplier => {
      const naam = supplier.name.toLowerCase().includes(searchTerm.toLowerCase());
      const contactPerson = supplier.contactPerson.toLowerCase().includes(searchTerm.toLowerCase());
      const supervisor = supplier.supervisor.toLowerCase().includes(searchTerm.toLowerCase());
      const website = supplier.website.toLowerCase().includes(searchTerm.toLowerCase());
      const note = supplier.note.toLowerCase().includes(searchTerm.toLowerCase());
      return (naam + contactPerson + supervisor + website + note);
    });
  }

}
