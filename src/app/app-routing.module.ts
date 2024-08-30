import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderCommpleteComponent } from './pages/order-commplete/order-commplete.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' }  },
  { path: 'shop', component: ShopComponent },
  { path: 'checkout', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order-complete', component: OrderCommpleteComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { title: 'Home' }  },
  { path: '**', redirectTo: '/home'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
