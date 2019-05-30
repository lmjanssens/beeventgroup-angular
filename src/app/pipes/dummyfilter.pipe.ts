import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'dummyFilter'
})
export class DummyFilterPipe implements PipeTransform {


  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(dummy => {
      if (dummy.id != null) {
        const id = dummy.id.toString().toLowerCase().includes(searchTerm.toLowerCase());
        const title = dummy.title.toLowerCase().includes(searchTerm.toLowerCase());
        const date = dummy.date.toLowerCase().includes(searchTerm.toLowerCase());
        return (id + title + date);
      }
    });
  }

}
