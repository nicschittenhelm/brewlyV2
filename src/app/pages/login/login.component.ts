import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor() {
    // Simulate a heavy computation that blocks the UI for 3 seconds
    const now = Date.now();
    while (Date.now() - now < 2000) {
      // Intentional delay to simulate a bad performance
    }
    console.log('Heavy computation finished.');
  }
}
