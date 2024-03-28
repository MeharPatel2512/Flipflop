import { Pipe, PipeTransform } from '@angular/core';
import { forEach, indexOf } from 'underscore';

@Pipe({
  name: 'searchfilter',
  standalone: true,
  pure: true
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, cat: any[]): any {

    console.log(cat);
    console.log("hehr")

    if(cat.length == 0){
      return value;
    }else{
      return value.filter((e : any) => {
        cat.forEach(ele => {
          return e.category.toLowerCase().indexOf(ele.toLowerCase()) > -1;
        });
      })
    }

    // return value.filter((e:any)=>{
    //   return e.Name.toLowerCase().indexOf(args[0].toLowerCase()) > -1;
    // });
  }

}
