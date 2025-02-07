import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataInfosService {
  private isLoggedIn = new BehaviorSubject<boolean>(false); // Utilisation de BehaviorSubject

  constructor() {}

  isAuthenticated(): boolean {
    return this.isLoggedIn.getValue(); // Utiliser getValue() pour accéder à la valeur actuelle
  }

  // Méthode pour connecter l'utilisateur
  login(email: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      this.isLoggedIn.next(true);
      return true;
    } else {
      this.isLoggedIn.next(false);
      return false;
    }
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    this.isLoggedIn.next(false);
  }

  // Observable pour surveiller l'état de connexion
  get isLoggedIn$() {
    return this.isLoggedIn.asObservable();
  }

  users = [
    {
      id: '2',
      prenom: 'Djimo',
      nom: 'Gassama',
      fonction: 'Directeur',
      email: 'djimo@gmail.com',
      password: '12345678',
    },
  ];
  // Les sous-catégories de produit
  subCategoriesFilterData = [
    { id: 1, categories: 'appliance', subCategories: 'rouge' },
    { id: 9, categories: 'appliance', subCategories: 'noire' },
    { id: 10, categories: 'appliance', subCategories: 'grise' },
    { id: 2, categories: 'yundai', subCategories: 'blanche' },
    { id: 3, categories: 'kia', subCategories: 'noire' },
    { id: 4, categories: 'bmw', subCategories: 'bleue' },
    { id: 5, categories: 'jeep', subCategories: 'noire' },
    { id: 6, categories: 'bmw', subCategories: 'blanche' },
    { id: 7, categories: 'kia', subCategories: 'grise' },
    { id: 8, categories: 'yundai', subCategories: 'noire' },
  ];

  // Les catégories de produits
  categoriesData = [
    {
      id: 1,
      name: 'Kia',
      img: '../../assets/img/Kia-Logo.jpeg',
      code: 'kia',
    },
    {
      id: 2,
      name: 'Yundai',
      img: '../../assets/img/yundai-logo.png',
      code: 'yundai',
    },
    {
      id: 3,
      name: 'Bmw',
      img: '../../assets/img/BMW-logo.webp',
      code: 'bmw',
    },
    {
      id: 4,
      name: 'Jeep',
      img: '../../assets/img/Jeep-logo.png',
      code: 'jeep',
    },
  ];

  // Les informations des produits
  productInfos = [
    {
      id: 1,
      name: 'Yundai Tucson 2025',
      desc: 'Hyundai Tucson ; Dimensions / Poids ; Dimensions / Poids · 4 640 mm (183″) · 1 865 mm (73″) · 1 685 mm (66″) · 2 755 mm (108″).',
      price: 50000,
      cat: 'yundai',
      img: '../../assets/img/2025-tucson-yundai.webp',
      subCategories: 'noire',
    },
    {
      id: 2,
      name: 'BMW Série 2 2021',
      desc: "BMW 2 Series 2021 finitions · Caméra de recul · Caméra à 360° · Freinage assisté · Surveillance de l'angle mort · Avertisseur de dérive.",
      price: 30000,
      cat: 'bmw',
      img: '../../assets/img/bmw-serie-2-coupe-2021-side-front.webp',
      subCategories: 'blanche',
    },
    {
      id: 3,
      name: 'BMW x3',
      desc: 'X3 - 4ème génération - 2024 · xDrive 20d X Line. Diesel; 197 ch; 8 cv; 5,8 l/100 km.',
      price: 25000,
      cat: 'bmw',
      img: '../../assets/img/bmw-x3-front-view.jpg',
      subCategories: 'bleue',
    },
    {
      id: 4,
      name: 'Hunter Newton',
      desc: 'La Hunter Newton X3 est un crossover (SUV compact) haut de gamme produit par le constructeur automobile japonaise Yundai.',
      price: 15000,
      cat: 'yundai',
      img: '../../assets/img/hunter-newton-BwaUJC81i6M-unsplash.jpg',
      subCategories: 'noire',
    },
    {
      id: 5,
      name: 'Jeep Wangler',
      desc: 'JEEP® WRANGLER 3.6L ESS RUBICON · 8 vitesses ATX; 4.1 · 2 ans / Kilométrage illimité · 209 kW (280 ch) à 6400 tr / min · 347 Nm (256 lb-pi) à 4100 tr / min ·',
      price: 55000,
      cat: 'jeep',
      img: '../../assets/img/JEEP-WRANGLER.jpg',
      subCategories: 'noire',
    },
    {
      id: 6,
      name: 'Kia Sportage',
      desc: 'Kia Sportage, un SUV au design unique et audacieux. Disponible Essence ou Diesel, Hybride & Hybride Rechargeable.',
      price: 15000,
      cat: 'kia',
      img: '../../assets/img/kia-sportage-ice-gtl-my22-csslunarsilver-19_0000.jpg',
      subCategories: 'noire',
    },
    {
      id: 7,
      name: 'Kia Sorento',
      desc: 'Kia Sportage, un SUV au design unique et audacieux. Disponible Essence ou Diesel, Hybride & Hybride Rechargeable.',
      price: 15000,
      cat: 'kia',
      img: '../../assets/img/kia-other-models-ev6-gtl.png',
      subCategories: 'grise',
    },
    {
      id: 8,
      name: 'Yundai Palisade 2024',
      desc: 'Le PALISADE 2024 est doté de 8 sièges haut de gamme livrables dans un habitacle élégant, moderne et intuitif, prévu pour combler les besoins de chacun',
      price: 70000,
      cat: 'yundai',
      img: '../../assets/img/yundai-palisade.png',
      subCategories: 'blanche',
    },
    {
      id: 9,
      name: 'Toyota Land Cruiser 2024',
      desc: "Un SUV robuste conçu pour l'aventure, alliant puissance, technologie avancée et confort exceptionnel sur tous les terrains.",
      price: 85000,
      cat: 'appliance',
      img: '../../assets/img/front45.png',
      subCategories: 'noire',
    },
    {
      id: 10,
      name: 'Tesla Model X',
      desc: 'Le SUV électrique futuriste avec des portes Falcon Wing, une autonomie exceptionnelle et une accélération impressionnante.',
      price: 120000,
      cat: 'appliance',
      img: '../../assets/img/TeslaModelX.jpeg',
      subCategories: 'noire',
    },
    {
      id: 11,
      name: 'Ford Mustang Mach-E',
      desc: 'Un SUV entièrement électrique avec des performances de pointe, une technologie innovante et un design inspiré de la Mustang classique.',
      price: 68000,
      cat: 'appliance',
      img: '../../assets/img/ford_mustang_mache_20_OnePedalDrive.webp',
      subCategories: 'rouge',
    },
    {
      id: 12,
      name: 'BMW X5 2024',
      desc: 'Un SUV de luxe alliant design élégant, puissance sportive et technologie intuitive pour un confort incomparable.',
      price: 95000,
      cat: 'appliance',
      img: '../../assets/img/La-toute-nouvelle-BMW-X5-2024.jpg',
      subCategories: 'grise',
    },
    {
      id: 13,
      name: 'Mercedes-Benz GLE',
      desc: 'Une combinaison parfaite de luxe, de performance et de polyvalence, équipée des dernières innovations technologiques.',
      price: 110000,
      cat: 'appliance',
      img: '../../assets/img/Mercedes.webp',
      subCategories: 'blanche',
    },
  ];
}
