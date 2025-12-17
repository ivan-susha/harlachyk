import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  template: `
  <div  class="cart-container">
  <h2 style={text-align:crenter}>Корзина</h2>
  @for(item of cart.getItems();track item.id){

  <div>  {{item.title}} — {{item.price}} Br
    <button mat-button color="warn" (click)="cart.remove($index)">Удалить</button>
  </div>
  }
  <h3>Итого: {{cart.getTotal()}} Br</h3>

  <button mat-raised-button
          color="primary"
          routerLink="/checkout"
          [disabled]="cart.getItems().length === 0">
    Оформить заказ
  </button>
 </div>
  `
})
export class CartComponent {
  constructor(public cart: CartService) {}
}
