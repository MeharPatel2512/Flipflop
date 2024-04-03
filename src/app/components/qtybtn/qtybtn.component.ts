import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { DataminpService } from '../../dataminp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qtybtn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qtybtn.component.html',
  styleUrl: './qtybtn.component.css'
})
export class QtybtnComponent implements OnInit{

  constructor(private datamanip : DataminpService){}

  count : number = 0 
  ngOnInit(): void {
    this.count = this.datamanip.getqty(this.product.id)    
  }
  
  @Input() product : any = {}
  cartdata : any[]  = []
  
  countminus(){
    this.count = this.count - 1
    this.datamanip.addtocart(this.product, this.count)
  }
  countplus(){
    this.count = this.count + 1
    this.datamanip.addtocart(this.product, this.count)
  }

  addtocartfunc(){
    this.count = this.count + 1
    this.datamanip.addtocart(this.product, 1)
  }
}
