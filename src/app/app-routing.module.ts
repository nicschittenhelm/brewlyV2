import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'checkout', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
