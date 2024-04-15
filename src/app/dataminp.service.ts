import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _, { contains } from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class DataminpService {

  private baseUrl = 'https://dummyjson.com/products';

  maindata : any = {}
  constructor(private _http : HttpClient) { 
    this.getdata().subscribe((res : any) => this.maindata = res)
  }

  getdata(){
    return this._http.get(this.baseUrl)
  }

  getmaindata(){
    return this.maindata
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

  selectedcategories  :any[] = []
  seclectedbrands : any[] = []
  selecteddiscount : any[] = []
  selectedrating : any[] = []
  selectedprice : any[] = []
  setcategories(arr : any[]){
    this.selectedcategories = []
    this.selectedcategories = arr
  }
  setbrands(arr : any[]){
    this.seclectedbrands = []
    this.seclectedbrands = arr
  }
  setdiscount(arr : any[]){
    this.selecteddiscount = []
    this.selecteddiscount = arr
  }
  setrating(arr : any[]){
    this.selectedrating = []
    this.selectedrating = arr
  }
  setprice(arr :any[]){
    this.selectedprice = []
    this.selectedprice = arr
  }

  filtereddata : any[] = []
  filterdata() : any{
    this.filtereddata = this.maindata.products
    if(this.selectedcategories.length == 0 && this.seclectedbrands.length == 0 && this.selecteddiscount.length == 0 && this.selectedrating.length == 0 && this.selectedprice.length == 0){
      this.filtereddata = this.maindata.products
    }
    else{
        let temparr : any[] = []
        if(this.selectedcategories.length != 0){
          this.filtereddata.forEach((product : any) => {
            if(_.contains(this.selectedcategories, product.category)){
              temparr.push(product)
            }
          });
          this.filtereddata = []
          this.filtereddata = temparr
          temparr = []
        }
        if(this.seclectedbrands.length != 0){
          this.filtereddata.forEach((product : any) => {
            if(_.contains(this.seclectedbrands, product.brand)){
              temparr.push(product)
            }
          });
          this.filtereddata = []
          this.filtereddata = temparr
          temparr = []
        }
        if(this.selecteddiscount.length != 0){
          this.filtereddata.forEach((product : any) => {
            if((_.contains(this.selecteddiscount, 1)) && (product.discountPercentage >= 0 && product.discountPercentage < 5)){
              temparr.push(product)
            }
            if((_.contains(this.selecteddiscount, 2)) && (product.discountPercentage >= 5 && product.discountPercentage < 10)){
              temparr.push(product)
            }
            if((_.contains(this.selecteddiscount, 3)) && (product.discountPercentage >= 10 && product.discountPercentage < 15)){
              temparr.push(product)
            }
            if((_.contains(this.selecteddiscount, 4)) && (product.discountPercentage >= 15 && product.discountPercentage < 20)){
              temparr.push(product)
            }
          });
          this.filtereddata = []
          this.filtereddata = temparr
          temparr = []
        }
        if(this.selectedrating.length != 0){
          this.filtereddata.forEach((product : any) => {
            if(_.contains(this.selectedrating, Math.ceil(product.rating))){
              temparr.push(product)
            }
          });
          this.filtereddata = []
          this.filtereddata = temparr
          temparr = []
        }
        if(this.selectedprice.length != 0){
          this.filtereddata.forEach((product : any) => {
            if((_.contains(this.selectedprice, 1)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 0 && (product.price- (product.price * product.discountPercentage / 100)) < 100)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 2)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 100 && (product.price- (product.price * product.discountPercentage / 100)) < 300)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 3)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 300 && (product.price- (product.price * product.discountPercentage / 100)) < 500)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 4)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 500 && (product.price- (product.price * product.discountPercentage / 100)) < 800)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 5)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 800 && (product.price- (product.price * product.discountPercentage / 100)) < 1200)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 6)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 1200 && (product.price- (product.price * product.discountPercentage / 100)) < 1800)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 7)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 1800)){
              temparr.push(product)
            }
          });
          this.filtereddata = []
          this.filtereddata = temparr
          temparr = []
        }
    }
  }

  getfiltereddata(){
    return this.filtereddata
  }

  categories : any[] = []
  getallcategiories() : any{
    if(this.categories.length == 0){
      this.maindata.products.forEach((product : any) => {
        if(!_.contains(this.categories, product.category)){
          this.categories.push(product.category)
        }
      });
    }
    return this.categories
  }

  brands : any[] = []
  getallbrands() : any{
    if(this.selectedcategories.length == 0){
      this.brands = []
        this.maindata.products.forEach((product : any) => {
          if(!_.contains(this.brands, product.brand)){
            this.brands.push(product.brand)
          }
        });
    } 
    else{
      this.brands = []
      this.maindata.products.forEach((product : any) => {
        if((!_.contains(this.brands, product.brand)) && (_.contains(this.selectedcategories, product.category))){
          this.brands.push(product.brand)
        }
      });
    }
    return this.brands
  }

  collections : any[] = []
}
 