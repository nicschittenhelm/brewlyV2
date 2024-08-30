import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-overlay',
  templateUrl: './shopping-cart-overlay.component.html',
  styleUrl: './shopping-cart-overlay.component.css'
})
export class ShoppingCartOverlayComponent {

  @Input() showDropdown: boolean = false;

}
