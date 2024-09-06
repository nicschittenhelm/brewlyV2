import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  personalInfoForm: FormGroup;
  isCartEmpty: boolean = false; // New property to track cart status

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Simulate a heavy computation that blocks the UI for 3 seconds
    const now = Date.now();
    while (Date.now() - now < 2000) {
      // Intentional delay to simulate a bad performance
    }
    console.log('Heavy computation finished.');

    this.personalInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      city: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9\s]*$/)]],
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.isCartEmpty = this.cartItems.length === 0; // Check if cart is empty
  }

  onSubmit() {
    if (this.isCartEmpty) {
      // Handle empty cart case
      console.log('No items in the cart!');
      return; // Prevent form submission
    }

    if (this.personalInfoForm.valid) {
      console.log('Form submitted successfully!', this.personalInfoForm.value);
      this.router.navigate(['/order-complete']);
      this.cartService.clearCart();
    } else {
      console.log('Form is invalid!');
      this.markFormGroupTouched(this.personalInfoForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as FormGroup).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getItems(); // Refresh the list
    this.isCartEmpty = this.cartItems.length === 0; // Update cart status
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
