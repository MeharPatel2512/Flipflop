import { Component, Input, SimpleChange } from '@angular/core';
import { DataminpService } from '../../dataminp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qtybtn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qtybtn.component.html',
  styleUrl: './qtybtn.component.css'
})
export class QtybtnComponent {

  constructor(private datamanip : DataminpService){}

  @Input() product : any
  count : number = 0
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
