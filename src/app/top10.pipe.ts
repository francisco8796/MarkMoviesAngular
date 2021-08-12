import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'top10'
})
export class Top10Pipe implements PipeTransform {

  // transform(items: any[],filter: Object): any {
  //   items.sort((a, b) => (a.revenue < b.revenue ? 1 : -1))
  //   items.slice(0,10);

  //   return items;
  // }

  transform(items: any[], filter: Object): any {
   
    return items.slice(0,10)
  
}
}
