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
     image: 'assets/img/set.jpg',
     video:'',
     carousel:''
    },
    {
      id: 2,
      title: 'Піялы “Караткевіч”',
      price: 4500,
      description: 'Піялы “Караткевіч”',
      image: 'assets/img/cup.jpg',
      video:'assets/video/piala_video.mp4',
     carousel:''
    },
    {
      id: 3,
      title: 'Піяла',
      price: 2500,
      description: 'Сэт для гарбаты Blacksie',
      image: 'assets/img/black_cup.jpg',
      video:'',
     carousel:''
    },
     {
      id: 4,
      title: 'ўпрыгожваньні',
      price: 2500,
      description: 'Мае першыя ўпрыгожваньні',
      image: 'assets/img/podveska.jpg',
      video:'',
     carousel:''
    }
    ,
    {
      id: 5,
      title: 'Вазачкі Bionic',
      price: 2500,
      description: 'Вазачкі Bionic',
      image: 'assets/img/vaza.jpg',
      video:'assets/video/vaza-bionic.mp4',
     carousel:''
    },
    {
      id: 6,
      title: 'Піялы і Імбрык',
      price: 2500,
      description: 'Піялы і Імбрык',
      image: 'assets/img/piala.jpg',
      video:'',
     carousel:''
    },
    {
      id: 7,
      title: 'Кубачкі для кавы “Караткевіч”',
      price: 2500,
      description: "<div>Рабі нечаканае. Рабі, як не бывае.</div><div>Рабі, як не робіць ніхто. І тады пераможаш! (с) У.С. Караткевіч</div>",
      image: 'assets/img/cofe-cup.png',
      video:'assets/video/h_video1.mp4',
     carousel:''
    },
     {
      id: 8,
      title: 'Птушачкі',
      price: 2500,
      description: 'Керамічныя ружанцы з Божым Словам',
      image: 'assets/img/beard.jpg',
      video:'',
     carousel:''
    },
    {
      id: 9,
      title: 'Рэлігіўныя вырабы',
      price: 2500,
      description: 'Шмат рэлігійных рэчаў: ужо традыцыйныя ружанцы і падвескі са Словам Божым,<br> насьценныя крыжы са Словам,<br> брошкі “Абраная”/“Абраны”, слоічкі для асьвечанай вады.<br> А таксама шмат іншага☺️ ',
      image: 'assets/img/cross.jpg',
      video:'assets/video/cross-v.mp4',
     carousel:''
    },
    {
      id: 10,
      title: 'Вулканчыкі',
      price: 40,
      description: 'Прыгажосьць - гэта ўжо дастатковы і глыбокі сэнс, які напаўняе нашае жыцьцё 🌿<br>Мае керамічныя вулканчыкі для пахошчаў у фларыстычнай кампазыцыі з імхом <br>выглядаюць як кадр з мульцікаў студыі Cartoon Saloon.<br>Стварайце казку ў сябе дома ✨<br>Вулканчыкі пад замову.',
      image: 'assets/img/vulcan.jpg',
      video:'assets/video/vulcan-v.mp4',
     carousel:''
    },
    {
      id: 11,
      title: 'Галінка для аромапалачак',
      price: 50,
      description: 'Галінка-падстаўка для аромапалачак 🌿<br>Пад замову.',
      image: 'assets/img/yavar.jpg',
      //video:'assets/video/yavar.mp4',
      video:'yavar.mp4',
     carousel:''
    },
    {
      id: 12,
      title: 'Талеркі і посуд',
      price: 50,
      description: 'На фота талеркі й боўлы “Квецень”, піялы й імбрык “Хвалі” і вулканчык напрыканцы,<br> усё ў базавым і лаканічным адценьні “Пяшчанік”.<br>Посуд у наяўнасьці 👍',
      image: 'assets/img/talerki.jpg',
      video:'',
     carousel:'assets/img/carousel/talerki/tal-1.jpg,assets/img/carousel/talerki/tal-2.jpg,assets/img/carousel/talerki/tal-3.jpg,assets/img/carousel/talerki/tal-4.jpg,assets/img/carousel/talerki/tal-5.jpg,assets/img/carousel/talerki/tal-6.jpg,assets/img/carousel/talerki/tal-7.jpg,assets/img/carousel/talerki/tal-8.jpg,assets/img/carousel/talerki/tal-9.jpg,assets/img/carousel/talerki/tal-10.jpg,assets/img/carousel/talerki/tal-11.jpg'
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
