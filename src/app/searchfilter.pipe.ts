import { Pipe, PipeTransform } from '@angular/core';
import { forEach, indexOf } from 'underscore';

@Pipe({
  name: 'searchfilter',
  standalone: true,
  pure: true
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any[], selectedCategories: any[]): any[] {
    if (!selectedCategories || selectedCategories.length === 0) {
      return value; // Return the original array if no categories are selected
    }
 
    return value.filter((item) => {
      return selectedCategories.some((category) => {
        return item.category.toLowerCase().includes(category.toLowerCase());
      });
    });
  }

    // return value.filter((e:any)=>{
    //   return e.Name.toLowerCase().indexOf(args[0].toLowerCase()) > -1;
    // });


}
