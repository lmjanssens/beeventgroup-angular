import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'instructorFilter'
})
export class InstructorFilterPipe implements PipeTransform {
  splitted: string[];
  firstName: string;
  infix: string;
  last_name: string;
  phone_number: string;
  email_address: string;
  username: string;

  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(instructor => {
      this.splitted = searchTerm.split(' ', 4);
      if (this.splitted.length >= 3) {
        this.firstName = instructor.first_name.toLowerCase().includes(this.splitted[0].toLowerCase()) &&
          instructor.infix.toLowerCase().includes(this.splitted[1].toLowerCase())
          && instructor.last_name.toLowerCase().includes(this.splitted[2].toLowerCase());
      } else if (this.splitted.length === 2) {
        this.firstName = instructor.first_name.toLowerCase().includes(this.splitted[0].toLowerCase())
          && instructor.last_name.toLowerCase().includes(this.splitted[1].toLowerCase());
        this.infix = instructor.first_name.toLowerCase().includes(this.splitted[0].toLowerCase())
          && instructor.infix.toLowerCase().includes(this.splitted[1].toLowerCase());
        this.last_name = instructor.infix.toLowerCase().includes(this.splitted[0].toLowerCase())
          && instructor.last_name.toLowerCase().includes(this.splitted[1].toLowerCase());
      } else {
        this.firstName = instructor.first_name.toLowerCase().includes(searchTerm.toLowerCase());
        this.infix = instructor.infix.toLowerCase().includes(searchTerm.toLowerCase());
        this.last_name = instructor.last_name.toLowerCase().includes(searchTerm.toLowerCase());
        this.phone_number = instructor.phone_number.toLowerCase().includes(searchTerm.toLowerCase());
        this.email_address = instructor.email_address.toLowerCase().includes(searchTerm.toLowerCase());
        this.username = instructor.user_id.username.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return (this.firstName + this.infix + this.last_name + this.phone_number + this.email_address + this.username);
    });
  }
}
