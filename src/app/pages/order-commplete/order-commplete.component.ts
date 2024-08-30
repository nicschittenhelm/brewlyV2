import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-commplete',
  templateUrl: './order-commplete.component.html',
  styleUrl: './order-commplete.component.css'
})
export class OrderCommpleteComponent implements OnInit {

  orderNumber: string | undefined;

  ngOnInit() {
    this.generateOrderNumber();
  }

  generateOrderNumber() {
    this.orderNumber = Math.floor(100000000000 + Math.random() * 900000000000).toString();
  }
}