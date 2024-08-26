import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY;
  
    const elements = [
      { id: 'bean1', baseTop: 25, speed: 0.3 },
      { id: 'bean2', baseTop: 60, speed: 0.05 },
      { id: 'bean3', baseTop: 15, speed: 0.05 },
      { id: 'bean4', baseTop: 70, speed: 0.3 },
      { id: 'mug', baseTop: 25, speed: 0.05 }
    ];
  
    elements.forEach(element => {
      const el = document.getElementById(element.id);
      if (el) {
        this.renderer.setStyle(el, 'top', element.baseTop - scrollPosition * element.speed + '%');
      }
    });
  }

  itemCards = [
    {
      imagePath: 'assets/select4.webp',
      title: 'SELECT Horizonte',
      description: 'Ein ausgewogener Kaffee mit einem feinen Mix aus Kakaonoten und einer leichten Süße.',
      price: 66.49,
      weight: 750,
      roastLevel: 'Medium',
      specialty: 'select'
    },
    {
      imagePath: 'assets/Sierra Madre Supremo.webp',
      title: 'Sierra Madre Supremo',
      description: 'Ein aromatischer Kaffee mit sanften Noten von Honig und Vanille, abgerundet durch einen Hauch von Mandeln. Ideal für einen eleganten, samtigen Genussmoment.',
      price: 29.99,
      weight: 500,
      roastLevel: 'Medium',
      specialty: ''
    },
    {
      imagePath: 'assets/unidesign2.webp',
      title: 'Premium Röstung Gemahlen',
      description: 'Ein eleganter Kaffee mit reichhaltigen Noten von Karamell und Vanille für den besonderen Genuss.',
      price: 45.99,
      weight: 500,
      roastLevel: 'Strong',
      specialty: 'premium'
    }
];


}