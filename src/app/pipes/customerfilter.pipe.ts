import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {


  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(customer => {
      if (customer.id != null) {
        const id = customer.id.toString().toLowerCase().includes(searchTerm.toLowerCase());
        const firstName = customer.firstName.toLowerCase().includes(searchTerm.toLowerCase());
        const infix = customer.infix.toLowerCase().includes(searchTerm.toLowerCase());
        const lastName = customer.lastName.toLowerCase().includes(searchTerm.toLowerCase());
        const zipcode = customer.zipcode.toLowerCase().includes(searchTerm.toLowerCase());
        const address = customer.address.toLowerCase().includes(searchTerm.toLowerCase());
        const city = customer.city.toLowerCase().includes(searchTerm.toLowerCase());
        return (id + firstName + infix + lastName + zipcode + address + city);
      }
    });
  }

}
