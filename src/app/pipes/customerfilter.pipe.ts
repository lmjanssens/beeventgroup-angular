import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {
  splitted: string[];
  first_name;
  infix;
  infix2;
  last_name;

  //naamgeving is slecht

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

      if (this.splitted.length >= 3) {
        this.first_name = customer.first_name.toLowerCase().includes(this.splitted[0].toLowerCase())
          && customer.infix.toLowerCase().includes(this.splitted[1].toLowerCase())
          && customer.last_name.toLowerCase().includes(this.splitted[2].toLowerCase());

        this.infix =  this.first_name = customer.infix.toLowerCase().includes(this.splitted[0].toLowerCase())
          && customer.last_name.toLowerCase().includes(this.splitted[2].toLowerCase());

        this.infix2 = customer.first_name.toLowerCase().includes(this.splitted[0].toLowerCase())
          && customer.last_name.toLowerCase().includes(this.splitted[3].toLowerCase());

      } else if (this.splitted.length === 2) {
        this.first_name = customer.first_name.toLowerCase().includes(this.splitted[0].toLowerCase())
          && customer.last_name.toLowerCase().includes(this.splitted[1].toLowerCase());

        this.infix = customer.first_name.toLowerCase().includes(this.splitted[0].toLowerCase())
          && customer.infix.toLowerCase().includes(this.splitted[1].toLowerCase());

        this.infix2 = customer.infix.toLowerCase().includes(searchTerm.toLowerCase());

        this.last_name = customer.infix.toLowerCase().includes(this.splitted[0].toLowerCase())
          && customer.last_name.toLowerCase().includes(this.splitted[1].toLowerCase());

      } else {

        this.first_name = customer.first_name.toLowerCase().includes(searchTerm.toLowerCase());
        this.infix = customer.infix.toLowerCase().includes(searchTerm.toLowerCase());
        this.last_name = customer.last_name.toLowerCase().includes(searchTerm.toLowerCase());
        this.infix2 = customer.infix.toLowerCase().includes(searchTerm.toLowerCase());
      }

      return (this.first_name + this.infix + this.last_name + zipcode + address + city + this.infix2);
    });
  }

}
