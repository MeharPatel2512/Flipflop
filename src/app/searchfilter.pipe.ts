import { Pipe, PipeTransform } from '@angular/core';
import { forEach, indexOf } from 'underscore';

@Pipe({
  name: 'searchfilter',
  standalone: true
})

export class SearchfilterPipe implements PipeTransform {

  transform(value: any, searchedval : any): any {
    if(!searchedval){
      return value
    }
    else{
      return value.filter((e : any) => {
        return (e.title.toLowerCase().indexOf(searchedval.toLowerCase()) > -1 ||
        e.brand.toLowerCase().indexOf(searchedval.toLowerCase()) > -1 ||
        e.description.toLowerCase().indexOf(searchedval.toLowerCase()) > -1 ||
        e.category.toLowerCase().indexOf(searchedval.toLowerCase()) > -1);
        
      })
    } 
  }
  

  // return value.filter((e:any)=>{
    //   return e.Name.toLowerCase().indexOf(args[0].toLowerCase()) > -1;
    // });
    

}
