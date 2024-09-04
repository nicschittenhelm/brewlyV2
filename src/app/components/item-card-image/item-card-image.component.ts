import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-item-card-image',
  templateUrl: './item-card-image.component.html',
  styleUrl: './item-card-image.component.css',
})
export class ItemCardImageComponent {
  @Input() imagePath!: string;
}
