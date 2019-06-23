import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {
  private instructors;
  private date;
  private event;
  splitted: string[];
  first_name;
  infix;
  infix2;
  last_name;


  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(order => {
        this.splitted = searchTerm.split(' ', 4);
        for (let a of order.registeredEvents) {
          this.first_name = a.instructor.first_name.toLowerCase().includes(searchTerm.toLowerCase());
          this.infix = a.instructor.infix.toLowerCase().includes(searchTerm.toLowerCase());
          this.last_name = a.instructor.last_name.toLowerCase().includes(searchTerm.toLowerCase());
          this.instructors = order.event.maxinstructors.toString().toLowerCase().includes(searchTerm.toLowerCase());
        }
        this.date = order.dateorder.toLowerCase().includes(searchTerm.toLowerCase());
        this.event = order.event.name.toLowerCase().includes(searchTerm.toLowerCase());
        return (this.instructors + this.date + this.event + this.infix + this.first_name + this.last_name);
      }
    );
  }

}
