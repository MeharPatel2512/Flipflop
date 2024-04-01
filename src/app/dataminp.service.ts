import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataminpService {

  private baseUrl = 'https://dummyjson.com/products';

  constructor(private _http : HttpClient) { }

  getdata(){
    return this._http.get(this.baseUrl)
  }

  mycart : any[] = []
  addtocart(product : any, qty : any){
    let flag = false
    if(this.mycart.length == 0){
  
    }else{
      for (let i = 0; i < this.mycart.length; i++) {
        if(this.mycart[i].id == product.id){
          if(qty == 0){
            this.mycart.splice(i, 1)
          }
          else{
            this.mycart[i].quantity = qty
          }
          flag = true
        }
      }
    }
    if(flag == false){
        const obj = {
          "id": product.id,
          "title": product.title,
          "description": product.description,
          "price": product.price,
          "discountPercentage": product.discountPercentage,
          "rating": product.rating,
          "stock": product.stock,
          "brand": product.brand,
          "category": product.category,
          "thumbnail": product.thumbnail,
          "images": product.images,
          "quantity": qty
        } 
        this.mycart.push(obj)
    }
    console.log(this.mycart);
    
  }

  getcartdata(){
    return this.mycart
  }

  clickedproduct : any = {}
  setclickedproduct(product : any){
    this.clickedproduct = product
    
  }

  getclickedproduct(){
    return this.clickedproduct
  }

  getproductimages() : any[] {
    return this.clickedproduct.images
  }
}
