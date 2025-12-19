import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [
     {
      id: 0,
      title: 'Калядныя цацкі',
      price: 0,
      description: 'Дарагія сябры, шмат калядных цацак на ялінку завезла ў краму @maistry_krainy (Dana mall,<br> 2 паверх, каля крамаў “Беларускі лён” і “Markformelle”).<br>У наяўнасьці як новыя каляровыя ялінкі, анёлкі, зорачкі і конікі, так і мінулагоднія птушкі ў тэхніцы сграфіта.<br> Усе цацкі па 12 р.<br>Таксама там жа можна набыць мае боўлы-кветкі, вулканчыкаў для пахошчаў, вазы і рознае іншае.<br>Запрашаю за падарункамі! І радаснай падрыхтоўкі да Раства!🎄',
     image: 'assets/img/new-year.jpg',
     video:'assets/video/new-year.mp4',
     carousel:''
    },
    {
      id: 1,
      title: 'Cэт “Квецень”',
      price: 0,
      description: 'Сэт “Квецень” у новых прыгажэнных глазурах 😍<br>🌸 Боўл маленькі 30 р.<br>🌸 Боўл вялікі 50 р.<br>🌸 Талерка плоская 40 р.',
     image: 'assets/img/set.jpg',
     video:'',
     carousel:'assets/img/carousel/set/set-1.jpg,assets/img/carousel/set/set-2.jpg,assets/img/carousel/set/set-5.jpg,assets/img/carousel/set/set-7.jpg,assets/img/carousel/set/set-9.jpg,assets/img/carousel/set/set-10.jpg'
    },
    {
      id: 2,
      title: 'Піялы “Караткевіч”',
      price: 0,
      description: 'Піялы “Караткевіч”',
      image: 'assets/img/cup.jpg',
      video:'assets/video/piala_video.mp4',
     carousel:''
    },
    {
      id: 3,
      title: 'Сэт для гарбаты Blacksie',
      price: 0,
      description: 'Сэт для гарбаты Blacksie 🖤🤎❤️‍🔥<br>Вытанчанасьць састарэлага і эстэтыка Вабі Сабі.<br>Пакуль у адзінкавым экзэмпляры, але дасяжны да замовы.<br>Піяла 45 руб (можна набыць у кавярні Pilligreen на вул. Нябеснай, 10).<br>Талерка дэсертная 45 руб.',
      image: 'assets/img/black_cup.jpg',
      video:'',
     carousel:'assets/img/carousel/black/black-1.jpg,assets/img/carousel/black/black-2.jpg,assets/img/carousel/black/black-3.jpg,assets/img/carousel/black/black-4.jpg,assets/img/carousel/black/black-5.jpg,assets/img/carousel/black/black-6.jpg,assets/img/carousel/black/black-7.jpg'
    },
     {
      id: 4,
      title: 'Ўпрыгожваньні',
      price: 0,
      description: 'Птушка ўва мне ляціць куды захоча” 🕊<br>Мае першыя ўпрыгожваньні ☺️🌸<br>Бранзалет - 25р<br>Падвеска - 15р<br>Брошка - 15р',
      image: 'assets/img/podveska.jpg',
      video:'',
     carousel:'assets/img/carousel/decor/decor-1.jpg,assets/img/carousel/decor/decor-2.jpg,assets/img/carousel/decor/decor-3.jpg,assets/img/carousel/decor/decor-4.jpg,assets/img/carousel/decor/decor-5.jpg,assets/img/carousel/decor/decor-6.jpg'
    }
    ,
    {
      id: 5,
      title: 'Вазачкі Bionic',
      price: 0,
      description: 'Вазачкі Bionic',
      image: 'assets/img/vaza.jpg',
      video:'assets/video/vaza-bionic.mp4',
     carousel:''
    },
    {
      id: 6,
      title: 'Піялы і Імбрык',
      price: 0,
      description: 'Піялы і Імбрык для гарбатапіцьця “Хвалі” ў новых глазурах. Замовіць можна ў тых жа, што й сэт “Квецень” з папярэдняй публікацыі.<br>Піяла 30 руб.<br>Імбрык 50 руб.',
      image: 'assets/img/piala.jpg',
      video:'',
     carousel:'assets/img/carousel/imbr/imbr-3.jpg,assets/img/carousel/imbr/imbr-5.jpg,assets/img/carousel/imbr/imbr-7.jpg,assets/img/carousel/imbr/imbr-8.jpg'
    },
    {
      id: 7,
      title: 'Кубачкі для кавы “Караткевіч”',
      price: 0,
      description: "<div>Рабі нечаканае. Рабі, як не бывае.</div><div>Рабі, як не робіць ніхто. І тады пераможаш! (с) У.С. Караткевіч</div>",
      image: 'assets/img/cofe-cup.png',
      video:'assets/video/h_video1.mp4',
     carousel:''
    },
     {
      id: 8,
      title: 'Керамічныя ружанцы',
      price: 0,
      description: 'Незвычайныя керамічныя ружанцы з Божым Словам. <br>Яны могуць быць добрым падарункам для блізкіх людзей.<br> А яшчэ ў іх ёсьць карабін, і іх можна прышпіліць на сумку і насіць з сабой.<br>Таксама пакуль у адзінкавым экзэмпляры ёсьць сьвечнік-алтарык і насьценны крыж.<br> Калі будзе запыт - буду рабіць яшчэ.<br>Усе гэтыя рэчы ўжо сёньня можна набыць<br> у краме нашага Касьцёла сьвятога Францішка ў Новай Баравой 🤎>',
      image: 'assets/img/beard.jpg',
      video:'',
     carousel:'assets/img/carousel/rugancy/rug-1.jpg,assets/img/carousel/rugancy/rug-2.jpg,assets/img/carousel/rugancy/rug-3.jpg,assets/img/carousel/rugancy/rug-4.jpg'
    },
    {
      id: 9,
      title: 'Рэлігіўныя вырабы',
      price: 0,
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
      video:'assets/video/yavar.mp4',
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
    },
    {
      id: 13,
      title: 'Для вясновага і Велікоднага дэкору',
      price: 50,
      description: '🌿Птушкі, якіх я рабіла, каб вешаць на ялінку, таксама прыдатныя і для вясновага й Велікоднага дэкору. Зьвяртайцеся! 😉<br>Гэтыя птушкі 7 р. Большыя - 10 р. 👍',
      image: 'assets/img/ostern.jpg',
      video:'',
     carousel:'assets/img/carousel/beard/beard-1.jpg,assets/img/carousel/beard/beard-2.jpg',
    },
    {
      id: 14,
      title: 'Крыж насьценны',
      price: 50,
      description: 'Крыж насьценны. Даступны пад замову, 60 р.<br> <br><i>Музыка: с. Марыя Емяльянчык - “Паглядзі на крыж”</i>',
      image: 'assets/img/cross-big.jpg',
      video:'assets/video/cross-big.mp4',
     carousel:'',
    },
    {
      id: 15,
      title: 'Сэт для гарбатапіцьця Хвалі.',
      price: 0,
      description: 'Сэт для гарбатапіцьця Хвалі. Я бясконца люблю эстэтыку Вабі Сабі.<br> Нейкая таямніца для мяне ёсьць у гэтай простасьці, недасканалых формах і лёгкім налёце часу.<br> З гэтай любові і нарадзіўся гэты сэт.<br>Піала для гарбаты - 30 р.<br>Імбрык - 50 р.<br>Сподачак - 15 р.<br>У наяўнасьці ў адным экзэмпляры, што на відэа. <br>Але ўсё магчыма зрабіць пад замову.',
      image: 'assets/img/tea-set.jpg',
      video:'assets/video/tea-set.mp4',
     carousel:'',
    },
    {
      id: 16,
      title: 'Вясновы сэт Квецень.',
      price: 0,
      description: 'Самы вясновы сэт Квецень 🌸❤️<br>Боўл вялікі - 50 р.<br>Боўл маленькі - 30 р.<br>Талерка вялікая - 50 р.',
      image: 'assets/img/spring-set.jpg',
      video:'assets/video/spring-set.mp4',
     carousel:'',
    },
    {
      id: 17,
      title: 'Вулканчыкі.',
      price: 0,
      description: 'Вулканчыкі. Большасьць раз’ехалася па гаспадарах, застаўся адзін, як на фота.<br>Прымаю наступныя замовы на малечаў 😉- 40р.',
      image: 'assets/img/vulkan-coll.jpg',
      video:'',
     carousel:'assets/img/carousel/vulcan/vul-1.jpg,assets/img/carousel/vulcan/vul-2.jpg,assets/img/carousel/vulcan/vul-3.jpg',
    },
    {
      id: 18,
      title: 'Званочкі.',
      price: 50,
      description: 'Музыка ветра. Падвескі-званочкі 🎶- 50р.',
      image: 'assets/img/bell.jpg',
      video:'assets/video/bell.mp4',
     carousel:'',
    },
    {
      id: 19,
      title: 'Вулканы-сьвечкі.',
      price: 60,
      description: 'I will be the light for you in the dark.<br>Вулканы-сьвечкі, з водарам лаванды.<br>Калі сьвечка скончыцца, то можна выкарыстоўваць як кашпо для сукулентаў,<br> падстаўку пад упрыгожваньні і іншыя дробязі,<br> альбо для ежы. Таксама можна нанова заліць воск, ён прадаецца ў любой хобі-краме.<br>60 р.',
      image: 'assets/img/candel-v.jpg',
      video:'assets/video/candel-v.mp4',
     carousel:'',
    },
    {
      id: 20,
      title: 'Малечы-вазачкі.',
      price: 50,
      description: 'Прарастаюць кветкі ад подыху вулкана.<br>Малечы-вазачкі.',
      image: 'assets/img/vaza-sm.jpg',
      video:'assets/video/vaza-sm.mp4',
     carousel:'',
    },
    {
      id: 21,
      title: 'Сьвечнік-ліхтарык.',
      price: 50,
      description: 'Запалі ўва мне надзею 🕊<br>Вулканчык, які падыхае цеплынёй.<br>Альбо сьвечнік-ліхтарык.',
      image: 'assets/img/light.jpg',
      video:'assets/video/light.mp4',
     carousel:'',
    },
    {
      id: 22,
      title: 'Птушачкі на ялінку.',
      price: 0,
      description: 'Птушачкі на ялінку:<br>Большая (курачка) - 10р.<br>Меньшыя - 7р.<br>Зьвяртайцеся ✨',
      image: 'assets/img/birdie.jpg',
      video:'assets/video/birdie.mp4',
     carousel:'',
    },
    {
      id: 23,
      title: 'Талерка Bloom.',
      price: 55,
      description: 'Bloom plate 🌸<br>Spring is coming 🌱',
      image: 'assets/img/plate.jpg',
      video:'',
     carousel:'assets/img/carousel/plate/plate-1.jpg,assets/img/carousel/plate/plate-2.jpg,assets/img/carousel/plate/plate-3.jpg',
    },
    {
      id: 24,
      title: 'Арома вулканчыкі.',
      price: 0,
      description: 'Нарэшце атрымалася нармалёва засьняць сваіх сонных каменьчыкаў у дзеяньні ✨',
      image: 'assets/img/vulc-set.jpg',
      video:'assets/video/vulc-set.mp4',
     carousel:'',
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
