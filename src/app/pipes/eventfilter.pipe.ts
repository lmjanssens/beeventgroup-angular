import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {


  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(event => {
      const name = event.name.toLowerCase().includes(searchTerm.toLowerCase());
      const location = event.location.name.toLowerCase().includes(searchTerm.toLowerCase());
      const price = event.pricePerPerson.toFixed(2).toLowerCase().includes(searchTerm.toLowerCase());
      return (name + location + price);
    });
  }

}
