import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataminpService } from '../../dataminp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'underscore'
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { DisplayproductsComponent } from '../displayproducts/displayproducts.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, DisplayproductsComponent, ProductdetailsComponent, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  data : any = {}
  cartdata : any[] = []
  filtereddata : any[] = []

  showsortmenu = false

  showcat = false
  categories : any = []
  selectedcategories : any[] = []

  showbrands = false
  brands : any = []
  selectedbrands : any[] = []
  
  showdis = false
  discount : any = []
  selecteddiscount : any[] = []
  
  showrating = false
  rating : any = []
  selectedrating : any[] = []
  
  showprice = false
  price : any = []
  selectedprice : any[] = []

  value : any = "val"
  searchtext : any = ""

  constructor( private useservice : DataminpService ){}

  ngOnInit(): void {
    this.useservice.getdata().subscribe(res => this.data = res)
    this.cartdata = this.useservice.getcartdata()
    this.data.products.forEach((product : any) => {
      if(!_.contains(this.categories, product.category)){
        this.categories.push(product.category)
      }
    });
    this.data.products.forEach((product : any) => {
      if(!_.contains(this.brands, product.brand)){
        this.brands.push(product.brand)
      }
    });
    this.filtereddata = this.data.products
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
    }
    
    if(this.selectedcategories.length == 0){
      this.filtereddata = this.data.products
    }
    else{
      this.filtereddata = []
      this.data.products.forEach((data : any) => {
        if(_.contains(this.selectedcategories, data.category)){
          this.filtereddata.push(data)
        }
      });
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
    }

    if(this.selectedbrands.length == 0){
      this.filtereddata = this.data.products
    }
    else{
      this.filtereddata = []
      this.data.products.forEach((data : any) => {
        if(_.contains(this.selectedbrands, data.brand)){
          this.filtereddata.push(data)
        }
      });
      console.log(this.brands);
      console.log(this.filtereddata);
      }
    
  }

  discountclick(name: number){
    let flag = false
    for(let i = 0; i < this.selecteddiscount.length; i++){
      if(this.selecteddiscount[i] == name){
        this.selecteddiscount.splice(i, 1)
        flag = true
      }
    }
    if(flag == false){
      this.selecteddiscount.push(name)
    }
    
  }

  ratingclick(name: number){
    let flag = false
    for(let i = 0; i < this.selectedrating.length; i++){
      if(this.selectedrating[i] == name){
        this.selectedrating.splice(i, 1)
        flag = true
      }
    }
    if(flag == false){
      this.selectedrating.push(name)
    }
    
  }
  
  priceclick(name: number){
    let flag = false
    for(let i = 0; i < this.selectedprice.length; i++){
      if(this.selectedprice[i] == name){
        this.selectedprice.splice(i, 1)
        flag = true
      }
    }
    if(flag == false){
      this.selectedprice.push(name)
    }
    
  }

  filterdata(){
    console.log("HI");
    
    if(this.selectedcategories.length == 0){
      this.filtereddata = this.data.products
    }
    else{
      
      this.data.products.forEach((data : any) => {
        this.selectedcategories.forEach(cat => {
          if(data.category == cat){
            this.filtereddata.push(data)
          }
        });
      });
    }
    console.log(this.filtereddata);
  }
}
