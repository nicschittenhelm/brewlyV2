import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() imagePath!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() weight!: number;
  @Input() roastLevel!: string;
  @Input() specialty!: string;
}
