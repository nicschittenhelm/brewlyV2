import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  itemCards = [
    {
      imagePath: 'assets/San Pedro Espresso.webp',
      title: 'San Pedro Espresso',
      weight: 600,
      description:
        'Ein kräftiger Espresso mit einem vollmundigen Geschmack und Noten von dunkler Schokolade und gerösteten Nüssen. Perfekt für Liebhaber intensiver Aromen.',
      price: 32.99,
      roastLevel: 'dunkel',
      specialty: '',
    },
    {
      imagePath: 'assets/Hacienda Del Valle.webp',
      title: 'Hacienda Del Valle',
      weight: 600,
      description:
        'Ein ausgewogener, mittelkräftiger Kaffee mit feinen Nuancen von Karamell und roten Beeren. Ideal für eine sanfte, aber reichhaltige Tasse.',
      price: 42.99,
      roastLevel: 'mittel',
      specialty: '',
    },
    {
      imagePath: 'assets/Tropical Sunrise Blend.webp',
      title: 'Tropical Sunrise Blend',
      weight: 400,
      description:
        'Ein heller, fruchtiger Kaffee mit Aromen von Zitrusfrüchten und einem Hauch von Blumen. Perfekt für einen belebenden Start in den Tag.',
      price: 25.99,
      roastLevel: 'hell',
      specialty: '',
    },
    {
      imagePath: 'assets/Sierra Madre Supremo.webp',
      title: 'Sierra Madre Supremo',
      weight: 500,
      description:
        'Ein aromatischer Kaffee mit sanften Noten von Honig und Vanille, abgerundet durch einen Hauch von Mandeln. Ideal für einen eleganten, samtigen Genussmoment.',
      price: 29.99,
      roastLevel: 'mittel',
      specialty: '',
    },
    {
      imagePath: 'assets/El Dorado Gold.webp',
      title: 'El Dorado Gold',
      weight: 400,
      description:
        'Ein reichhaltiger Kaffee mit kräftigem Körper und einem ausgeprägten, süßlichen Nachgeschmack von Karamell und Trockenfrüchten. Perfekt für Genießer.',
      price: 34.99,
      roastLevel: 'mittel',
      specialty: 'Gold',
    },
    {
      imagePath: 'assets/Andes Heritage.webp',
      title: 'Andes Heritage',
      weight: 300,
      description:
        'Ein komplexer, vollmundiger Kaffee mit Aromen von dunklen Beeren und Kakao. Ausgezeichnet für diejenigen, die tiefere und intensivere Geschmacksprofile suchen.',
      price: 27.99,
      roastLevel: 'dunkel',
      specialty: '',
    },
    {
      imagePath: 'assets/Rainforest Harmony.webp',
      title: 'Rainforest Harmony',
      weight: 600,
      description:
        'Ein harmonischer Kaffee mit einem ausgewogenen Profil, das Noten von Haselnuss und Zartbitterschokolade vereint. Perfekt für den täglichen Genuss.',
      price: 39.99,
      roastLevel: 'mittel',
      specialty: '',
    },
    {
      imagePath: 'assets/Costa Rica Reserve.webp',
      title: 'Costa Rica Reserve',
      weight: 250,
      description:
        'Ein lebendiger, mitteldunkel gerösteter Kaffee mit Zitrusnoten und einer leichten Süße. Ideal für eine belebende und erfrischende Tasse.',
      price: 24.99,
      roastLevel: 'mittel',
      specialty: '',
    },
    {
      imagePath: 'assets/unidesign1.webp',
      title: 'Goldene Röstung',
      weight: 500,
      description:
        'Ein luxuriöser Kaffee mit goldenen Aromen von gerösteten Nüssen und Zartbitterschokolade.',
      price: 49.99,
      roastLevel: 'dunkel',
      specialty: 'Gold',
    },
    {
      imagePath: 'assets/unidesign3.webp',
      title: 'Bronze Röstung',
      weight: 500,
      description:
        'Ein kräftiger Kaffee mit tiefen Aromen von dunkler Schokolade und gerösteten Mandeln.',
      price: 41.99,
      roastLevel: 'dunkel',
      specialty: 'Bronze',
    },
    {
      imagePath: 'assets/unidesign4.webp',
      title: 'Kaffee Meisterstück',
      weight: 500,
      description:
        'Ein meisterhaft gerösteter Kaffee mit einer komplexen Mischung aus Früchten und Gewürzen.',
      price: 52.99,
      roastLevel: 'dunkel',
      specialty: 'Meisterstück',
    },
    {
      imagePath: 'assets/unidesign1.webp',
      title: 'Elegante Röstung',
      weight: 500,
      description:
        'Ein raffinierter Kaffee mit sanften Aromen von Karamell und einem Hauch von Zimt.',
      price: 46.99,
      roastLevel: 'mittel',
      specialty: 'Elegant',
    },
    {
      imagePath: 'assets/unidesign2.webp',
      title: 'Premium Gold Röstung',
      weight: 500,
      description:
        'Ein Premium Kaffee mit edlen Aromen von gerösteten Nüssen und feiner Vanille.',
      price: 48.99,
      roastLevel: 'dunkel',
      specialty: 'Premium',
    },
    {
      imagePath: 'assets/unidesign3.webp',
      title: 'Bronze Deluxe Röstung',
      weight: 500,
      description:
        'Ein kräftiger Kaffee mit reichen Aromen von Kakaopulver und gerösteten Kaffeebohnennoten.',
      price: 43.99,
      roastLevel: 'dunkel',
      specialty: 'Bronze',
    },
    {
      imagePath: 'assets/unidesign4.webp',
      title: 'Röstmeister',
      weight: 500,
      description:
        'Ein meisterhaft gerösteter Kaffee mit tiefen Noten von Schokolade und einer leichten Karamellsüße.',
      price: 51.99,
      roastLevel: 'dunkel',
      specialty: 'Röstmeister',
    },
    {
      imagePath: 'assets/unidesign5.webp',
      title: 'Deluxe Aroma',
      weight: 500,
      description:
        'Ein Kaffee von höchster Qualität mit Aromen von Haselnuss und edler Zartbitterschokolade.',
      price: 54.99,
      roastLevel: 'dunkel',
      specialty: 'Deluxe',
    },
    {
      imagePath: 'assets/unidesign6.webp',
      title: 'Exklusiv Blend',
      weight: 500,
      description:
        'Ein exklusiver Blend mit komplexen Aromen von Trockenfrüchten und einer edlen Süße.',
      price: 58.99,
      roastLevel: 'dunkel',
      specialty: '',
    },
    {
      imagePath: 'assets/unidesign1.webp',
      title: 'Goldener Genuss',
      weight: 500,
      description:
        'Ein luxuriöser Kaffee mit goldenen Aromen von Karamell und feiner Vanille.',
      price: 47.99,
      roastLevel: 'dunkel',
      specialty: 'Gold',
    },
    {
      imagePath: 'assets/unidesign2.webp',
      title: 'Premium Blend',
      weight: 500,
      description:
        'Ein exquisiter Blend mit reichhaltigen Aromen von gerösteten Nüssen und edler Schokolade.',
      price: 44.99,
      roastLevel: 'mittel',
      specialty: 'Premium',
    },
    {
      imagePath: 'assets/unidesign3.webp',
      title: 'Bronze Genuss',
      weight: 500,
      description:
        'Ein kräftiger Kaffee mit tiefen Noten von Kakao und gerösteten Mandeln.',
      price: 42.99,
      roastLevel: 'dunkel',
      specialty: 'Bronze',
    },
    {
      imagePath: 'assets/unidesign4.webp',
      title: 'Kaffee Luxus',
      weight: 500,
      description:
        'Ein luxuriöser Kaffee mit reichhaltigen Aromen von Zartbitterschokolade und feinen Gewürzen.',
      price: 50.99,
      roastLevel: 'dunkel',
      specialty: '',
    },
    {
      imagePath: 'assets/unidesign5.webp',
      title: 'Deluxe Blend',
      weight: 500,
      description:
        'Ein exklusiver Blend mit Aromen von Haselnüssen und edlen Schokoladennoten.',
      price: 53.99,
      roastLevel: 'dunkel',
      specialty: 'Deluxe',
    },
    {
      imagePath: 'assets/unidesign1.webp',
      title: 'Gold Premium',
      weight: 500,
      description:
        'Ein Premium Kaffee mit goldenen Aromen von gerösteten Nüssen und feiner Schokolade.',
      price: 49.49,
      roastLevel: 'dunkel',
      specialty: 'Gold',
    },
    {
      imagePath: 'assets/unidesign2.webp',
      title: 'Premium Röstung',
      weight: 500,
      description:
        'Ein eleganter Kaffee mit reichhaltigen Noten von Karamell und Vanille für besondere Momente.',
      price: 46.49,
      roastLevel: 'mittel',
      specialty: 'Premium',
    },
    {
      imagePath: 'assets/unidesign4.webp',
      title: 'Röstung Gold',
      weight: 500,
      description:
        'Ein edler Kaffee mit goldenen Aromen von gerösteten Nüssen und feiner Vanille.',
      price: 52.49,
      roastLevel: 'dunkel',
      specialty: 'Gold',
    },
    {
      imagePath: 'assets/unidesign6.webp',
      title: 'Exklusiv Kaffee',
      weight: 500,
      description:
        'Ein exklusiver Kaffee mit einzigartigen Aromen von Trockenfrüchten und edler Süße.',
      price: 59.49,
      roastLevel: 'dunkel',
      specialty: '',
    },
    {
      imagePath: 'assets/unidesign6.webp',
      title: 'Exklusiv Röstung',
      weight: 500,
      description:
        'Ein exklusiver Kaffee mit einer komplexen Mischung aus Trockenfrüchten und einer feinen Süße.',
      price: 57.99,
      roastLevel: 'dunkel',
      specialty: '',
    },
    {
      imagePath: 'assets/unidesign3.webp',
      title: 'Bronze Blend',
      weight: 500,
      description:
        'Ein kräftiger Kaffee mit Aromen von Kakaopulver und gerösteten Kaffeebohnennoten.',
      price: 40.99,
      roastLevel: 'dunkel',
      specialty: 'Bronze',
    },
    {
      imagePath: 'assets/unidesign5.webp',
      title: 'Deluxe Röstung',
      weight: 500,
      description:
        'Ein erstklassiger Kaffee mit Aromen von Haselnüssen und hochwertiger Zartbitterschokolade.',
      price: 55.49,
      roastLevel: 'dunkel',
      specialty: 'Deluxe',
    },
    {
      imagePath: 'assets/select1.webp',
      title: 'SELECT Sierra',
      weight: 750,
      description:
        'Ein eleganter Kaffee mit Aromen von gerösteten Nüssen und einem Hauch von Zartbitterschokolade.',
      price: 64.99,
      roastLevel: 'mittel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select2.webp',
      title: 'SELECT Supremo',
      weight: 750,
      description:
        'Ein vollmundiger Kaffee mit Noten von Karamell und dunklen Beeren, ideal für den anspruchsvollen Genießer.',
      price: 67.99,
      roastLevel: 'dunkel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select3.webp',
      title: 'SELECT Brillante',
      weight: 750,
      description:
        'Ein heller, fruchtiger Kaffee mit Aromen von Zitrusfrüchten und einem blumigen Abgang.',
      price: 61.99,
      roastLevel: 'mittel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select4.webp',
      title: 'SELECT Horizonte',
      weight: 750,
      description:
        'Ein ausgewogener Kaffee mit einem feinen Mix aus Kakaonoten und einer leichten Süße.',
      price: 66.49,
      roastLevel: 'mittel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select5.webp',
      title: 'SELECT Aurora',
      weight: 750,
      description:
        'Ein samtiger Kaffee mit einem sanften Aroma von Vanille und einem Hauch von Karamell.',
      price: 68.99,
      roastLevel: 'mittel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select6.webp',
      title: 'SELECT Valle',
      weight: 750,
      description:
        'Ein mittelkräftiger Kaffee mit Noten von gerösteten Mandeln und einer dezenten Fruchtnuance.',
      price: 62.99,
      roastLevel: 'mittel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select7.webp',
      title: 'SELECT Altura',
      weight: 750,
      description:
        'Ein hochlandiger Kaffee mit komplexen Aromen von dunklen Beeren und Zartbitterschokolade.',
      price: 69.49,
      roastLevel: 'dunkel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select8.webp',
      title: 'SELECT Tierra',
      weight: 750,
      description:
        'Ein erdiger Kaffee mit einem robusten Körper und tiefen, würzigen Aromen.',
      price: 63.99,
      roastLevel: 'dunkel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select1.webp',
      title: 'SELECT Cumbre',
      weight: 750,
      description:
        'Ein kräftiger Kaffee mit intensiven Noten von Kakao und einem Hauch von Zimt.',
      price: 65.49,
      roastLevel: 'dunkel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select2.webp',
      title: 'SELECT Lluvia',
      weight: 750,
      description:
        'Ein weicher Kaffee mit floralen Aromen und einem leicht süßlichen Abgang.',
      price: 60.99,
      roastLevel: 'mittel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select3.webp',
      title: 'SELECT Solano',
      weight: 750,
      description:
        'Ein harmonischer Kaffee mit ausgewogenen Noten von Haselnuss und dunkler Schokolade.',
      price: 64.49,
      roastLevel: 'dunkel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select4.webp',
      title: 'SELECT Mirador',
      weight: 750,
      description:
        'Ein aromatischer Kaffee mit fruchtigen Akzenten und einer feinen Säure.',
      price: 68.49,
      roastLevel: 'mittel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select5.webp',
      title: 'SELECT Rocas',
      weight: 750,
      description:
        'Ein vollmundiger Kaffee mit tiefen, erdigen Noten und einem langanhaltenden Abgang.',
      price: 66.99,
      roastLevel: 'dunkel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select6.webp',
      title: 'SELECT Cascada',
      weight: 750,
      description:
        'Ein lebendiger Kaffee mit spritzigen Zitrusnoten und einer leichten Würze.',
      price: 62.49,
      roastLevel: 'mittel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select7.webp',
      title: 'SELECT Esencia',
      weight: 750,
      description:
        'Ein intensiver Kaffee mit einer reichen, vollmundigen Textur und einem Hauch von Gewürzen.',
      price: 67.49,
      roastLevel: 'dunkel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select8.webp',
      title: 'SELECT Rayo',
      weight: 750,
      description:
        'Ein kräftiger Kaffee mit einer lebendigen Säure und einem ausgeprägten Kakaogeschmack.',
      price: 61.49,
      roastLevel: 'dunkel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select1.webp',
      title: 'SELECT Estrella',
      weight: 750,
      description:
        'Ein glanzvoller Kaffee mit Aromen von gerösteten Nüssen und einem süßen, malzigen Abgang.',
      price: 69.99,
      roastLevel: 'dunkel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select2.webp',
      title: 'SELECT Viento',
      weight: 750,
      description:
        'Ein frischer Kaffee mit hellen Fruchtnoten und einem sanften, floralen Aroma.',
      price: 63.49,
      roastLevel: 'mittel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select3.webp',
      title: 'SELECT Niebla',
      weight: 750,
      description:
        'Ein mystischer Kaffee mit tiefen, rauchigen Noten und einem Hauch von dunklen Beeren.',
      price: 65.99,
      roastLevel: 'dunkel',
      specialty: 'Select',
    },
    {
      imagePath: 'assets/select4.webp',
      title: 'SELECT Horizonte',
      weight: 750,
      description:
        'Ein ausgewogener Kaffee mit einem feinen Mix aus Kakaonoten und einer leichten Süße.',
      price: 66.49,
      roastLevel: 'mittel',
      specialty: 'Select',
    },
  ];

  searchText: string = '';
  selectedRoastLevel: string = '';
  selectedSpecialty: string = '';
  selectedWeight: number | null = null;
  selectedSort: 'Aufsteigend' | 'Absteigend' | null = null;
  isDropdownOpenSpecialty: boolean = false;
  isRoastLevelDropdownOpen: boolean = false;
  isDropdownOpenWeight: boolean = false;
  isDropdownOpenSort: boolean = false;

  specialties: string[] = [
    'Gold',
    'Premium',
    'Bronze',
    'Meisterstück',
    'Deluxe',
    'Elegant',
    'Röstmeister',
    'Select',
  ];
  roastLevels: string[] = ['hell', 'mittel', 'dunkel'];
  weights: number[] = [250, 300, 400, 500, 600, 750];

  filteredItems = [...this.itemCards];

  toggleDropdownSpecialty() {
    this.closeAllDropdowns();
    this.isDropdownOpenSpecialty = !this.isDropdownOpenSpecialty;
  }

  toggleRoastLevelDropdown() {
    this.closeAllDropdowns();
    this.isRoastLevelDropdownOpen = !this.isRoastLevelDropdownOpen;
  }

  toggleDropdownWeight() {
    this.closeAllDropdowns();
    this.isDropdownOpenWeight = !this.isDropdownOpenWeight;
  }

  toggleDropdownSort() {
    this.closeAllDropdowns();
    this.isDropdownOpenSort = !this.isDropdownOpenSort;
  }

  resetFilters() {
    this.searchText = '';
    this.selectedWeight = null;
    this.selectedSpecialty = '';
    this.selectedRoastLevel = '';
    this.selectedSort = null; // Reset sorting
    this.filteredItems = [...this.itemCards]; // Reset filtered items to include all items
  }

  selectSort(sort: 'Aufsteigend' | 'Absteigend' | null) {
    this.selectedSort = sort;
    this.isDropdownOpenSort = false;
    this.filterItems(); // Filter items after changing sort option
  }

  selectSpecialty(specialty: string) {
    if (specialty === '') {
      this.selectedSpecialty = ''; // Reset specialty filter
    } else {
      this.selectedSpecialty = specialty;
    }
    this.isDropdownOpenSpecialty = false; // Close dropdown after selection
    this.filterItems(); // Update the filtered items based on selection
  }

  selectRoastLevel(roastLevel: string) {
    if (roastLevel === '') {
      this.selectedRoastLevel = ''; // Reset roast level filter
    } else {
      this.selectedRoastLevel = roastLevel;
    }
    this.isRoastLevelDropdownOpen = false; // Close dropdown after selection
    this.filterItems(); // Update the filtered items based on selection
  }

  selectWeight(weight: number | null) {
    this.selectedWeight = weight;
    this.isDropdownOpenWeight = false; // Close dropdown after selection
    this.filterItems(); // Update the filtered items based on selection
  }

  filterItems() {
    this.filteredItems = this.itemCards.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
      const matchesWeight =
        this.selectedWeight !== null
          ? item.weight === this.selectedWeight
          : true;
      const matchesRoastLevel = this.selectedRoastLevel
        ? item.roastLevel === this.selectedRoastLevel
        : true;
      const matchesSpecialty = this.selectedSpecialty
        ? item.specialty === this.selectedSpecialty
        : true;
      return (
        matchesSearch && matchesWeight && matchesRoastLevel && matchesSpecialty
      );
    });

    this.sortItems(); // Sort items after filtering
  }

  sortItems() {
    if (this.selectedSort === 'Aufsteigend') {
      this.filteredItems.sort((a, b) => a.price - b.price);
    } else if (this.selectedSort === 'Absteigend') {
      this.filteredItems.sort((a, b) => b.price - a.price);
    }
    // If `this.selectedSort` is `null`, no sorting is applied
  }

  // Helper function to close all dropdowns
  private closeAllDropdowns() {
    this.isDropdownOpenSpecialty = false;
    this.isRoastLevelDropdownOpen = false;
    this.isDropdownOpenWeight = false;
    this.isDropdownOpenSort = false;
  }

  //simulate layout shift
  showImage = false;

  ngOnInit() {
    // Delay adding the image component by 1000ms
    setTimeout(() => {
      this.showImage = true;
    }, 1000);
  }
}
