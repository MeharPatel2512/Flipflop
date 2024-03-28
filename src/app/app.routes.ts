import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { MycartComponent } from './components/mycart/mycart.component';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "products", component : ProductsComponent},
    {path : "mycart", component : MycartComponent}
];
