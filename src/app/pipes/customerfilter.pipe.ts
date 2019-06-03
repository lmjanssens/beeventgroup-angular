import {Pipe, PipeTransform} from '@angular/core';
import {split} from 'ts-node';


@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {
  splitted: string[];
  firstName;
  infix;
  lastName;

  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(customer => {
      this.splitted = searchTerm.split(' ', 3);
      console.log(this.splitted);

      const zipcode = customer.zipcode.toLowerCase().includes(searchTerm.toLowerCase());
      const address = customer.address.toLowerCase().includes(searchTerm.toLowerCase());
      const city = customer.city.toLowerCase().includes(searchTerm.toLowerCase());

      if (this.splitted.length === 3) {
        this.firstName = customer.firstName.toLowerCase().includes(this.splitted[0].toLowerCase());
        this.infix = customer.infix.toLowerCase().includes(this.splitted[1].toLowerCase());
        this.lastName = customer.lastName.toLowerCase().includes(this.splitted[2].toLowerCase());
      } else if (this.splitted.length === 2) {
        this.firstName = customer.firstName.toLowerCase().includes(this.splitted[0].toLowerCase());
        this.infix = customer.infix.toLowerCase().includes(this.splitted[0].toLowerCase());
        this.lastName = customer.lastName.toLowerCase().includes(this.splitted[1].toLowerCase());
      } else {

        this.firstName = customer.firstName.toLowerCase().includes(searchTerm.toLowerCase());
        this.infix = customer.infix.toLowerCase().includes(searchTerm.toLowerCase());
        this.lastName = customer.lastName.toLowerCase().includes(searchTerm.toLowerCase());
      }

      return (this.firstName + this.infix + this.lastName + zipcode + address + city);
    });
  }

}
