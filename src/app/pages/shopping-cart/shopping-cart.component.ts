import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  
  cartItems: CartItem[] = [];
  personalInfoForm: FormGroup;

  constructor(private cartService: CartService, private fb: FormBuilder, private router: Router) {
    this.personalInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      postalCode: ['', Validators.required, Validators.pattern(/^[0-9]*$/)],
      city: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  onSubmit() {
    if (this.personalInfoForm.valid) {
      console.log('Form submitted successfully!', this.personalInfoForm.value);
      this.router.navigate(['/order-complete']);
    } else {
      console.log('Form is invalid!');
      this.markFormGroupTouched(this.personalInfoForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if ((control as FormGroup).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getItems(); // Refresh the list
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  
}