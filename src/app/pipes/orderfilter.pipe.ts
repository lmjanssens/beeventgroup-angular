import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {


  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(order => {
      const date = order.dateOrder.toLowerCase().includes(searchTerm.toLowerCase());
      return (date);
    });
  }

}
