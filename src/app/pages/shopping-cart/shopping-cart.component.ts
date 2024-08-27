import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getItems(); // Refresh the list
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}