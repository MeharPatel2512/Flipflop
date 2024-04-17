import { Component, OnInit } from '@angular/core';
import { DataminpService } from '../../dataminp.service';
import { CommonModule } from '@angular/common';
import { AddressComponent } from '../address/address.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mycart',
  standalone: true,
  imports: [CommonModule, AddressComponent, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './mycart.component.html',
  styleUrl: './mycart.component.css'
})
export class MycartComponent implements OnInit{
  constructor(private datamanip : DataminpService){}

  cart : any[] = []
  ngOnInit(): void {
    this.cart = this.datamanip.getcartdata()
  }

  countplus(pro : any){
    this.datamanip.addtocart(pro, pro.quantity + 1)
  }

  countminus(pro : any){
    this.datamanip.addtocart(pro, pro.quantity - 1)
  }

  gettotalprice() : any{
    let total = 0
    this.cart.forEach(cartitem => {
      total = total + (cartitem.price * cartitem.quantity)
    });
    return total
  }

  gettotalamount() : any{
    let total = 0
    this.cart.forEach(cartdata => {
      total = total + ((cartdata.price - (cartdata.price * cartdata.discountPercentage / 100))* cartdata.quantity )
    });
    return total.toFixed(2)
  }

  gettotaldiscount() : any{
    let dis = 0
    this.cart.forEach(cartdata => {
      dis = dis + ((cartdata.price * cartdata.discountPercentage/100) * cartdata.quantity)
    });
    return dis.toFixed(2)
  }

  getnumofitems(){
    return this.datamanip.getnumofitems()
  }

  saveforlaterbtn(){
    this.datamanip.addtocollection()
    this.cart = this.datamanip.getcartdata()
  }
}
