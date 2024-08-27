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
  private cartItems: CartItem[] = [
    {
      "imagePath": "assets/San Pedro Espresso.webp",
      "title": "San Pedro Espresso",
      "weight": 600,
      "description": "Ein kräftiger Espresso mit einem vollmundigen Geschmack und Noten von dunkler Schokolade und gerösteten Nüssen. Perfekt für Liebhaber intensiver Aromen.",
      "price": 32.99,
      "roastLevel": "dunkel",
      "specialty": ""
    },
    {
        "imagePath": "assets/Hacienda Del Valle.webp",
        "title": "Hacienda Del Valle",
        "weight": 600,
        "description": "Ein ausgewogener, mittelkräftiger Kaffee mit feinen Nuancen von Karamell und roten Beeren. Ideal für eine sanfte, aber reichhaltige Tasse.",
        "price": 42.99,
        "roastLevel": "mittel",
        "specialty": ""
    },
      {
        "imagePath": "assets/Tropical Sunrise Blend.webp",
        "title": "Tropical Sunrise Blend",
        "weight": 400,
        "description": "Ein heller, fruchtiger Kaffee mit Aromen von Zitrusfrüchten und einem Hauch von Blumen. Perfekt für einen belebenden Start in den Tag.",
        "price": 25.99,
        "roastLevel": "hell",
        "specialty": ""
    }
  ];

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