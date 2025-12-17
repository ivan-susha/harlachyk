import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  cart: Product[] = [];

  add(product: Product) {
    this.cart.push(product);
  }

  remove(index: number) {
    this.cart.splice(index, 1);
  }

  clear() {
    this.cart = [];
  }

  getItems() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((sum, p) => sum + p.price, 0);
  }
}
