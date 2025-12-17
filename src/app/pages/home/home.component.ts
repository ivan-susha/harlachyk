import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

import { TabComponent } from "../tabs/tab";

@Component({
  standalone: true,
  imports: [MatButtonModule, RouterLink, TabComponent],
  template: `
  <section class="hero">
     <div class="logo-container">
  <img mat-card-image src="assets/img/logo.jpg"  alt="image">
  <div>
 <div>✨Прыродная эстэтыка і трошку казкі✨</div>
<div>Мой ілюстратарскі акаўнт: <a href='https://www.instagram.com/rainy.me/'>@rainy.me</a></div>
  </div>
</div>
<div  class="tabs-container">
  <app-tab [src]="'/assets/tab/tab1.jpg'" [title]="'Дзе набыць'" [alt]="'Где преобрести.'"></app-tab>
  <app-tab [src]="'/assets/tab/tab2.jpg'" [title]="'Працэс'" [alt]="'Процесс.'"></app-tab>
  <app-tab [src]="'/assets/tab/tab3.jpg'" [title]="'Маркеты'" [alt]="'Маркеты.'"></app-tab>
  <app-tab [src]="'/assets/tab/tab4.jpg'" [title]="'Фотадзень'" [alt]="'Фотодень.'"></app-tab>

</div>
    <h1>Кераміка ручных вырабаў</h1>
    <p>Эксклюзіўныя вырабы для вашага дому</p>

    <button mat-raised-button color="primary" routerLink="/catalog">
      Перайсці ў каталог
    </button>
  </section>
  `,
  styles: [`
    .hero { text-align:center; padding:30px; }
  `]
})
export class HomeComponent {}
