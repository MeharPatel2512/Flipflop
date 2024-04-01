import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "products", component : ProductsComponent},
    {path : "mycart", component : MycartComponent},
    {path : "products/productdetails", component : ProductdetailsComponent}
];
