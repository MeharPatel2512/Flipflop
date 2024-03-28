import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataminpService } from '../../dataminp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'underscore'
import { SearchfilterPipe } from '../../searchfilter.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, SearchfilterPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  data : any = {}

  showsortmenu = false

  showcat = false
  categories : any = []
  selectedcategories : any[] =[]
  
  

  showbrands = false
  brands : any = []
  selectedbrands : any[] =[]
  
  showdis = false
  discount : any = []
  selecteddiscount : any[] =[]
  
  showrating = false
  rating : any = []
  selectedrating : any[] =[]
  
  showprice = false
  price : any = []
  selecteprice : any[] =[]

  value : any = "val"

  constructor( private useservice : DataminpService ){}

  ngOnInit(): void {
    this.useservice.getdata().subscribe(res => this.data = res)
  }

  getcategories(){
    this.showcat = !this.showcat
    this.data.products.forEach((product : any) => {
      if(!_.contains(this.categories, product.category)){
        this.categories.push(product.category)
        const obj = {
          "id" : product.id,
          "name" : product.category,
          "isChecked" : false
        }
        this.selectedcategories.push(obj)
      }
    });
    // console.log(this.selectedcategories);
    
  }

  getbrands(){
    this.showbrands = !this.showbrands
    this.data.products.forEach((product : any) => {
      if(!_.contains(this.brands, product.brand)){
        this.brands.push(product.brand)
      }
    })
  }

  getdis(){
    this.showdis = !this.showdis
  }

  getrating(){
    this.showrating = !this.showrating
  }

  getprice(){
    this.showprice = !this.showprice
  }

  categoryclick(name: string){
    let flag = false
    for(let i = 0; i < this.selectedcategories.length; i++){
      if(this.selectedcategories[i] == name){
        this.selectedcategories.splice(i, 1)
        flag = true
      }
    }
    if(flag == false){
      this.selectedcategories.push(name)
      console.log(this.selectedcategories);
    }
  }

  brandclick(name: string){
    let flag = false
    for(let i = 0; i < this.selectedbrands.length; i++){
      if(this.selectedbrands[i] == name){
        this.selectedbrands.splice(i, 1)
        flag = true
      }
    }
    if(flag == false){
      this.selectedbrands.push(name)
      console.log(this.selectedbrands);
    }
  }





  getvalue(cat : any){
    if(_.contains(this.selectedcategories, cat)){
      return true;
    }
    else if(this.selectedcategories.length == 0){
      return true;
    }
    else{
      return false;
    }
  }
}
