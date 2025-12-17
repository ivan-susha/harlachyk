import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { PaymentService } from '../../core/services/payment.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [MatButtonModule],
  template: `
  <div  class="cart-container">
    <h2>Заказ</h2>
    <p>Сумма: {{cart.getTotal()}} By</p>

    <button mat-raised-button color="primary" (click)="pay()">Отправить заказ на исполнение</button>

    @if(paid) {<p >Заказ отправлен. С Вами свяжутся. ✔</p>}
  </div>
  `
})
export class CheckoutComponent {
  paid = false;

  constructor(public cart: CartService, private payment: PaymentService) {}

  async pay() {
    const result = await this.payment.pay(this.cart.getTotal());
    if (result) {
      this.paid = true;
      this.cart.clear();
    }
  }
}
