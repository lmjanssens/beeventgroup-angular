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
      if (order.orderId != null) {
        const id = order.orderId.toString().toLowerCase().includes(searchTerm.toLowerCase());
        const date = order.dateOrder.toLowerCase().includes(searchTerm.toLowerCase());
        return (id + date);
      }
    });
  }

}
