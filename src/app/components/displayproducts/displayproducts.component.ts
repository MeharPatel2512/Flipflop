import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Output } from '@angular/core';
import { SearchfilterPipe } from '../../searchfilter.pipe';
import { DataminpService } from '../../dataminp.service';
import { QtybtnComponent } from '../qtybtn/qtybtn.component';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import _ from 'underscore';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-displayproducts',
  standalone: true,
  imports: [CommonModule, SearchfilterPipe, QtybtnComponent, ProductdetailsComponent, RouterModule, RouterLink, RouterLinkActive, HttpClientModule],
  templateUrl: './displayproducts.component.html',
  styleUrl: './displayproducts.component.css'
})
export class DisplayproductsComponent implements OnInit, OnChanges{

  constructor(private useservice : DataminpService){}

  data : any = {}

  ngOnInit(): void {
    this.useservice.getdata().subscribe(res => this.data = res)
  }

  ngOnChanges(changes: SimpleChanges): any {
  }

  @Input() filtereddata : any[] = []
  @Input() searchtext : any


  clickedproduct = {}
  setproduct(product : any){
    this.clickedproduct = product
    this.useservice.setclickedproduct(this.clickedproduct)
  }

}
