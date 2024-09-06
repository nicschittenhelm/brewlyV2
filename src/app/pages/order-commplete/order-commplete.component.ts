import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-commplete',
  templateUrl: './order-commplete.component.html',
  styleUrl: './order-commplete.component.css',
})
export class OrderCommpleteComponent implements OnInit {
  constructor() {
    // Simulate a heavy computation that blocks the UI for 3 seconds
    const now = Date.now();
    while (Date.now() - now < 2000) {
      // Intentional delay to simulate a bad performance
    }
    console.log('Heavy computation finished.');
  }

  orderNumber: string | undefined;

  ngOnInit() {
    this.generateOrderNumber();
  }

  generateOrderNumber() {
    this.orderNumber = Math.floor(
      100000000000 + Math.random() * 900000000000
    ).toString();
  }
}
