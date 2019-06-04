import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'orderFilter'
})
export class EventFilterPipe implements PipeTransform {


  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(event => {
      if (event.pricePerPerson != null) {
        const price = event.pricePerPerson.toFixed(2).toLowerCase().includes(searchTerm.toLowerCase());
        return (price);
      }
    });
  }

}
