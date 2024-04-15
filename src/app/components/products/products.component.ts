import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataminpService } from '../../dataminp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'underscore'
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { QtybtnComponent } from '../qtybtn/qtybtn.component';
import { SearchfilterPipe } from '../../searchfilter.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, ProductdetailsComponent, QtybtnComponent, RouterOutlet, RouterLinkActive, RouterLink, CheckboxModule, SearchfilterPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  filterdetect : any = ""
  filtereddata : any[] = []
  data : any[] = []

  categories : any[] = []
  brands : any[] = []

  showsortmenu = false

  value : any = "val"
  searchtext : any = ""

  selectedcategories : any[] = []
  selectedbrands : any[] = []
  selecteddiscount : any[] = []
  selectedrating : any[] = []
  selectedprice : any[] = []

  showcat : boolean = false
  showbrands : boolean = false
  showdis : boolean = false
  showrating : boolean = false
  showprice : boolean = false

  constructor( private useservice : DataminpService ){}

  ngOnInit(): void {
    this.useservice.filterdata()
    this.filtereddata = this.useservice.getfiltereddata()    
    this.categories = this.useservice.getallcategiories()
    this.brands = this.useservice.getallbrands()
  }

  categoryclick(){
    this.useservice.setcategories(this.selectedcategories)
    this.useservice.filterdata()
    this.brands = this.useservice.getallbrands()
    this.filtereddata = this.useservice.getfiltereddata()
  }

  brandclick(){
    this.useservice.setbrands(this.selectedbrands)
    this.useservice.filterdata()
    this.filtereddata = this.useservice.getfiltereddata()
  }
  
  discountclick(){
    this.useservice.setdiscount(this.selecteddiscount)
    this.useservice.filterdata()
    this.filtereddata = this.useservice.getfiltereddata()
  }

  ratingclick(){
    this.useservice.setrating(this.selectedrating)
    this.useservice.filterdata()
    this.filtereddata = this.useservice.getfiltereddata()
  }

  priceclick(){
    this.useservice.setprice(this.selectedprice)
    this.useservice.filterdata()
    this.filtereddata = this.useservice.getfiltereddata()
  }

  clickedproduct = {}
  setproduct(product : any){
    this.clickedproduct = product
    this.useservice.setclickedproduct(this.clickedproduct)
  }
  
}
