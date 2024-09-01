import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderCommpleteComponent } from './pages/order-commplete/order-commplete.component';
import { ShoppingCartOverlayComponent } from './components/shopping-cart-overlay/shopping-cart-overlay.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopImageComponent } from './components/shop-image/shop-image.component';
import { DelayedLoadingService } from './services/delayed-loading.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ShopComponent,
    ItemCardComponent,
    ShoppingCartComponent,
    LoginComponent,
    OrderCommpleteComponent,
    ShoppingCartOverlayComponent,
    AboutComponent,
    FooterComponent,
    ShopImageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(delayedLoadingService: DelayedLoadingService) {
    delayedLoadingService.simulateDelay('data', 3000).subscribe(() => {
      // Simulated delay for module loading
    });
  }
}
