import { Component, OnInit } from '@angular/core';
import { DataminpService } from '../../dataminp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common'

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit{

  constructor( private datamanip : DataminpService, private location: Location ){}

  product : any = {}
  images : any[] = []
  showimg : any
  ngOnInit(): void {
    this.product = this.datamanip.getclickedproduct()    
    this.images = this.datamanip.getproductimages()
    this.showimg = this.images[0]
  }

  liked : boolean = false

  getimage(image : any){
     this.showimg = image
  }

  goBackToPrevPage(): void {
    this.location.back();
  }
}
