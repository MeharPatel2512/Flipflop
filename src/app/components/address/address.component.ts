import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country, State, City }  from 'country-state-city';
import { DataminpService } from '../../dataminp.service';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'app-address',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit{
  constructor(private useservice : DataminpService, private location: Location){}

  countries : any[] = []
  userdata : any
  ngOnInit(): void {
    this.countries = Country.getAllCountries() 
    this.userdata = this.useservice.getuserdata()
    if(this.userdata.name){
      this.username = this.userdata.name
      this.useremail = this.userdata.email
      this.userphonenum = this.userdata.phone
      this.useraddressline1 = this.userdata.addressline1
      this.useraddressline2 = this.userdata.addressline2
      this.countryname = this.userdata.country
      this.statename = this.userdata.state
      this.cityname = this.userdata.city
    }
  }

  showerror : boolean = false
  orderplaced : boolean = false
  username : any = ""
  useremail : any = ""
  userphonenum : any = ""
  useraddressline1 : any = ""
  useraddressline2 : any = ""


  selectcountry = "Choose a Country"
  selectstate = "Choose a State"
  selectcity = "Choose a City"
  countryname : any = ""
  statename : any = ""
  cityname : any = ""

  states : any[] = []
  cities : any[] = []

  getstates(){
    this.states = State.getStatesOfCountry(this.selectcountry)
    this.countryname = (Country.getCountryByCode(this.selectcountry))?.name
  }
  
  getcities(){
    this.cities = City.getCitiesOfState(this.selectcountry,this.selectstate)
    this.statename = (State.getStateByCodeAndCountry(this.selectstate, this.selectcountry))?.name
    this.cityname = this.selectcity
  }
  
  senduserdata(){
    if(this.username.length != 0 && this.useremail.length != 0 && this.userphonenum.length != 0 && this.useraddressline1.length != 0 && this.useraddressline2.length != 0 && this.countryname.length != 0 && this.statename.length != 0){
      const user = {
        "name" : this.username,
        "email" : this.useremail,
        "phone" : this.userphonenum,
        "addressline1" : this.useraddressline1,
        "addressline2" : this.useraddressline2,
        "country" : this.countryname,
        "state" : this.statename,
        "city" : this.cityname
      }
      this.useservice.saveuserdata(user)
      this.orderplaced = true
      this.showerror = false
      this.useservice.placeorder()
    }
    else{
      this.showerror = true
      this.orderplaced = false
    }
  }

  getnumofitems(){
    return this.useservice.getnumofitems()
  }

  goBackToPrevPage(): void {
    this.location.back();
  }
}
