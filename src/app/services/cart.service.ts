import { Injectable } from '@angular/core';

export interface CartItem { // Export the interface
  imagePath: string;
  title: string;
  weight: number;
  description: string;
  price: number;
  roastLevel: string;
  specialty: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() {}

  // Add an item to the cart
  addItem(item: CartItem): void {
    this.cartItems.push(item);
  }

  // Remove an item from the cart
  removeItem(index: number): void {
    if (index > -1 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
    }
  }

  // Get all items in the cart
  getItems(): CartItem[] {
    return this.cartItems;
  }

  // Clear all items in the cart
  clearCart(): void {
    this.cartItems = [];
  }

  // Get the total price of all items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}