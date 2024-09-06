import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor() {
    // Simulate a heavy computation that blocks the UI for 3 seconds
    const now = Date.now();
    while (Date.now() - now < 2000) {
      // Intentional delay to simulate a bad performance
    }
    console.log('Heavy computation finished.');
  }
}
