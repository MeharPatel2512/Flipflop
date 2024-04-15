import { Component } from '@angular/core';
import { ProductsComponent } from '../components/products/products.component';
import { HomeComponent } from '../components/home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { OrdersComponent } from '../components/orders/orders.component';
import { AboutComponent } from '../components/about/about.component';
import { CollectionsComponent } from '../components/collections/collections.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, ProductsComponent, OrdersComponent, AboutComponent, CollectionsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
