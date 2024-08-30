import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem, CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit, OnDestroy {
  itemCount: number = 0;
  private cartSubscription: Subscription | undefined;
  animateCartIcon: boolean = false;
  showDropdown: boolean = false;
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.cartSubscription = this.cartService.cartItemCount$.subscribe(count => {
      if (count !== this.itemCount) {
        this.itemCount = count;
        this.triggerAnimation();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  private triggerAnimation(): void {
    this.animateCartIcon = true;
    // Remove the animation class after the animation ends
    setTimeout(() => {
      this.animateCartIcon = false;
    }, 500); // Matches the duration of the animation
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getItems(); // Refresh the list
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }



}