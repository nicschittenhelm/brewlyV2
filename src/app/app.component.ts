import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Brewly';

  isDesktop: boolean = true;

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
