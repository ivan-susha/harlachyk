import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink],
  template: `
  <mat-toolbar color="primary">
    <span>Кераміка</span>
    <span class="spacer"></span>

    <a mat-button routerLink="/">Галоўная</a>
    <a mat-button routerLink="/catalog">Каталог</a>
    <a mat-button routerLink="/cart">Карзіна</a>
    <a mat-button routerLink="/admin">Адмін</a>
  </mat-toolbar>
  `,
  styles: [`.spacer { flex: 1 1 auto; }`]
})
export class HeaderComponent {}
