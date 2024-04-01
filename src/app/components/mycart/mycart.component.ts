import { Component, OnInit } from '@angular/core';
import { DataminpService } from '../../dataminp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mycart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mycart.component.html',
  styleUrl: './mycart.component.css'
})
export class MycartComponent implements OnInit{
  constructor(private datamanip : DataminpService){}

  cart : any[] = []
  ngOnInit(): void {
    this.cart = this.datamanip.getcartdata()
  }
}
