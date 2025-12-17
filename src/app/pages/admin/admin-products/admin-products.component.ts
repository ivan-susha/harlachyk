import { Component } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  template: `
    <h2>Админ — товары</h2>

    <button mat-raised-button color="primary" routerLink="/admin/add">
      Добавить товар
    </button>

     @for(p of products.getAll();track p.id ){
     <div> {{p.title}} — {{p.price}} ₽
      <button mat-button routerLink="/admin/edit/{{p.id}}">Изменить</button>
      <button mat-button color="warn" (click)="products.delete(p.id)">Удалить</button>
    </div>
     }
  `
})
export class AdminProductsComponent {
  constructor(public products: ProductsService) {}
}
