import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Brewly';

  isDesktop: boolean = true;
  disableInteraction = true;

  constructor(private router: Router) {
    // Listen to router events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Start of navigation: disable interaction
        this.disableInteraction = true;
      } else if (event instanceof NavigationEnd) {
        // End of navigation: re-enable interaction after a slight delay (to account for any asynchronous loading)
        setTimeout(() => {
          this.disableInteraction = false;
        }, 2000); // Adjust delay as needed
      }
    });
  }

  ngOnInit(): void {
    this.checkDevice();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkDevice();
  }

  checkDevice(): void {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      const minWidth = 1080; // Define your minimum width for desktop
      const isMobileUserAgent = /Mobi|Android|iPhone|iPad|iPod/.test(
        navigator.userAgent
      );

      this.isDesktop = window.innerWidth >= minWidth && !isMobileUserAgent;

      if (this.isDesktop) {
        console.log('Desktop device detected.');
      } else {
        console.log('Mobile device detected.');
      }
    } else {
      console.log(
        'Navigator or window is undefined. Not in a browser environment.'
      );
    }
  }
}
