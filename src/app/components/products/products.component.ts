import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataminpService } from '../../dataminp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'underscore'
import { SearchfilterPipe } from '../../searchfilter.pipe';
import { QtybtnComponent } from '../qtybtn/qtybtn.component';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, SearchfilterPipe, QtybtnComponent, ProductdetailsComponent, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  data : any = {}
  cartdata : any[] = []

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
  searchtext : any = ""

  constructor( private useservice : DataminpService ){}

  ngOnInit(): void {
    this.useservice.getdata().subscribe(res => this.data = res)
    this.cartdata = this.useservice.getcartdata()

    // this.data.products.forEach((product : any) => {
    //   if(!_.contains(this.categories, product.category)){
    //     this.categories.push(product.category)
    //   }
    // });

    // this.data.products.forEach((product : any) => {
    //   if(!_.contains(this.brands, product.brand)){
    //     this.brands.push(product.brand)
    //   }
    // })
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

  clickedproduct = {}
  setproduct(product : any){
    this.clickedproduct = product
    this.useservice.setclickedproduct(this.clickedproduct)
  }
}
