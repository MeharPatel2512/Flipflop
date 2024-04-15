import { Component , HostListener } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { DataminpService } from './dataminp.service';
import { CollectionsComponent } from './components/collections/collections.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, ProductsComponent, HomeComponent, MycartComponent, CollectionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  showButton = false

  constructor(private useservice : DataminpService){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 100;
  }

  scrollShowBtn(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getnumofitems(){
    return this.useservice.getnumofitems()
  }
}
