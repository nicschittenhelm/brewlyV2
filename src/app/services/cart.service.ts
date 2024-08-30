import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  private cartItemCount = new BehaviorSubject<number>(0);

  cartItemCount$ = this.cartItemCount.asObservable(); // Observable for subscribing to changes

  constructor() {}

  // Add an item to the cart
  addItem(item: CartItem): void {
    this.cartItems.push(item);
    this.updateCartItemCount();
  }

  // Remove an item from the cart
  removeItem(index: number): void {
    if (index > -1 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
      this.updateCartItemCount();
    }
  }

  // Get all items in the cart
  getItems(): CartItem[] {
    return this.cartItems;
  }

  // Clear all items in the cart
  clearCart(): void {
    this.cartItems = [];
    this.updateCartItemCount();
  }

  // Get the total price of all items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  // Get the number of items in the cart
  getItemCount(): number {
    return this.cartItems.length;
  }

  // Update the cart item count and notify observers
  private updateCartItemCount(): void {
    this.cartItemCount.next(this.getItemCount());
  }
}