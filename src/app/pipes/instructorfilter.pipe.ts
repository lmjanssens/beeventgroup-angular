import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'instructorFilter'
})
export class InstructorFilterPipe implements PipeTransform {
  splitted: string[];
  firstName: string;
  infix: string;
  lastName: string;
  phoneNumber: string;
  email: string;

  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(instructor => {
      this.splitted = searchTerm.split(' ', 3);
      console.log(this.splitted);
      if (this.splitted.length === 3) {
        this.firstName = instructor.firstName.toLowerCase().includes(this.splitted[0].toLowerCase()) &&
          instructor.infix.toLowerCase().includes(this.splitted[1].toLowerCase())
          && instructor.lastName.toLowerCase().includes(this.splitted[2].toLowerCase());
      } else if (this.splitted.length === 2) {
        this.firstName = instructor.firstName.toLowerCase().includes(this.splitted[0].toLowerCase()) && instructor.lastName.toLowerCase().includes(this.splitted[1].toLowerCase());
        this.infix = instructor.firstName.toLowerCase().includes(this.splitted[0].toLowerCase()) && instructor.infix.toLowerCase().includes(this.splitted[1].toLowerCase());
        this.lastName = instructor.infix.toLowerCase().includes(this.splitted[0].toLowerCase()) && instructor.lastName.toLowerCase().includes(this.splitted[1].toLowerCase());
      } else {
        this.firstName = instructor.firstName.toLowerCase().includes(searchTerm.toLowerCase());
        this.infix = instructor.infix.toLowerCase().includes(searchTerm.toLowerCase());
        this.lastName = instructor.lastName.toLowerCase().includes(searchTerm.toLowerCase());
        this.phoneNumber = instructor.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase());
        this.email = instructor.email.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return (this.firstName + this.infix + this.lastName + this.phoneNumber + this.email);
    });
  }
}
