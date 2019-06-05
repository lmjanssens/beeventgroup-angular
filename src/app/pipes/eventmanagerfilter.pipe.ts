import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'eventmanagerFilter'
})
export class EventManagerFilterPipe implements PipeTransform {
  splitted: string[];
  firstName: string;
  infix: string;
  lastName: string;

  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(eventmanager => {
      this.splitted = searchTerm.split(' ', 3);
      console.log(this.splitted);
      if (this.splitted.length === 3) {
        this.firstName = eventmanager.firstName.toLowerCase().includes(this.splitted[0].toLowerCase());
        this.lastName = eventmanager.lastName.toLowerCase().includes(this.splitted[2].toLowerCase());
      } else if (this.splitted.length === 2) {
        this.firstName = eventmanager.firstName.toLowerCase().includes(this.splitted[0].toLowerCase());
        this.lastName = eventmanager.lastName.toLowerCase().includes(this.splitted[1].toLowerCase());
      } else {
        this.firstName = eventmanager.firstName.toLowerCase().includes(searchTerm.toLowerCase());
        this.infix = eventmanager.infix.toLowerCase().includes(searchTerm.toLowerCase());
        this.lastName = eventmanager.lastName.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return (this.firstName + this.infix + this.lastName);
    });
  }
}
