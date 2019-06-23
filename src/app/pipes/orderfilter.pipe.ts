import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {
  private instructors;
  private date;
  private event;


  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(order => {
        this.instructors = order.event.maxinstructors.toString().toLowerCase().includes(searchTerm.toLowerCase());
        this.date = order.dateorder.toLowerCase().includes(searchTerm.toLowerCase());
        this.event = order.event.name.toLowerCase().includes(searchTerm.toLowerCase());
        return (this.instructors + this.date + this.event);
      }
    );
  }

}
