import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { AddressComponent } from './components/address/address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "products", component : ProductsComponent},
    {path : "mycart", component : MycartComponent},
    {path : "products/productdetails", component : ProductdetailsComponent},
    {path : "mycart/address", component : AddressComponent},
    {path : "orders", component : OrdersComponent},
    {path : "about", component : AboutComponent}
];
