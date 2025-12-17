import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      title: 'сэт “Квецень”',
      price: 3200,
      description: ' сэт “Квецень” у новых прыгажэнных глазурах.',
     image: '/assets/img/set.jpg',
     video:''
    },
    {
      id: 2,
      title: 'Піялы “Караткевіч”',
      price: 4500,
      description: 'Піялы “Караткевіч”',
      image: '/assets/img/cup.jpg',
      video:'/assets/video/piala_video.mp4'
    },
    {
      id: 3,
      title: 'Піяла',
      price: 2500,
      description: 'Сэт для гарбаты Blacksie',
      image: '/assets/img/black_cup.jpg',
      video:''
    },
     {
      id: 4,
      title: 'ўпрыгожваньні',
      price: 2500,
      description: 'Мае першыя ўпрыгожваньні',
      image: '/assets/img/podveska.jpg',
      video:''
    }
    ,
    {
      id: 5,
      title: 'Вазачкі Bionic',
      price: 2500,
      description: 'Вазачкі Bionic',
      image: '/assets/img/vaza.jpg',
      video:'/assets/video/vaza-bionic.mp4'
    },
    {
      id: 6,
      title: 'Піялы і Імбрык',
      price: 2500,
      description: 'Піялы і Імбрык',
      image: '/assets/img/piala.jpg',
      video:''
    },
    {
      id: 7,
      title: 'Кубачкі для кавы “Караткевіч”',
      price: 2500,
      description: "<div>Рабі нечаканае. Рабі, як не бывае.</div><div>Рабі, як не робіць ніхто. І тады пераможаш! (с) У.С. Караткевіч</div>",
      image: '/assets/img/cofe-cup.png',
      video:'/assets/video/h_video1.mp4'
    },
     {
      id: 8,
      title: 'Птушачкі',
      price: 2500,
      description: 'Керамічныя ружанцы з Божым Словам',
      image: '/assets/img/beard.jpg',
      video:''
    }
  ];

  getAll() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find(p => p.id === id);
  }

  add(product: Product) {
    this.products.push(product);
  }

  update(product: Product) {
    const index = this.products.findIndex(p => p.id === product.id);
    this.products[index] = product;
  }

  delete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
