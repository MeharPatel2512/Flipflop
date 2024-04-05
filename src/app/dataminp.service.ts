import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'underscore';

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
  
  getqty(id : any) : number{
    let flag = 0
    if(this.mycart.length != 0){
      this.mycart.forEach(cart => {
        if(cart.id == id){
          flag = cart.quantity
        }
      });
    } 
    return flag
  }

  getnumofitems(){
    let num = 0
    this.mycart.forEach(cart => {
      num = num + cart.quantity
    });
    return num
  }

  userdata : any = {}
  saveuserdata(obj : any){
    this.userdata = obj
  }

  myorders : any[] = []
  placeorder(){
    if(this.myorders.length == 0){
      this.mycart.forEach(cartele => {
        this.myorders.push(cartele)
      });
      this.mycart = []
    }
    else{
      this.mycart.forEach(cart => {
        let flag = 0
        this.myorders.forEach(order => {
          if(order.id == cart.id){
            flag = 1
            order.quantity = order.quantity + cart.quantity
          }
        });
        if(flag == 0){
          this.myorders.push(cart)
        }
      });
      this.mycart = []
    }
  }

  getorderdata(){
    return this.myorders
  }

  getuserdata(){
    return this.userdata
  }

  // getnewbrands(data : any[], cats : any[]) : any[]{
  //   data.forEach((product : any) => {
  //     if((!_.contains(this.brands, product.brand)) && (_.contains(this.categories, product.category))){
  //         this.brands.push(product.brand)
  //     }
  //   })
  //   console.log(this.brands)
  // }
}
 