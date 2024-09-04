import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  @Input() imagePath!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() weight!: number;
  @Input() roastLevel!: string;
  @Input() specialty!: string;

  addedToCart = false;

  constructor(
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  addToCart(): void {
    const item = {
      imagePath: this.imagePath,
      title: this.title,
      weight: this.weight,
      description: this.description,
      price: this.price,
      roastLevel: this.roastLevel,
      specialty: this.specialty,
    };
    this.cartService.addItem(item);
    console.log('Added to cart:', item);

    this.addedToCart = true;
    this.cdr.detectChanges(); // Force Angular to update the view

    setTimeout(() => {
      this.addedToCart = false;
      this.cdr.detectChanges(); // Force Angular to update the view again
    }, 1500);
  }

  showImage = false;

  ngOnInit() {
    // Delay adding the image component by 2000ms
    setTimeout(() => {
      this.showImage = true;
    }, 1000);
  }
}
