import { Component, OnInit } from '@angular/core';
import { DataminpService } from '../../dataminp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{

  constructor(private useservice : DataminpService){}

  myorders : any[] = []

  ngOnInit(): void {
    this.myorders = this.useservice.getorderdata()
  }


}
