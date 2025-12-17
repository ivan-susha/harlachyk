import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { NgxSimpleParallaxJsModule } from 'ngx-simple-parallax-js';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [MatButtonModule],
  template: `
    @if(product){
    <div class="flex-container">
      @if(product.video){
          <video autoplay muted playsinline loop controls height="550";width="400";>
  <source  [src]="product.video" type="video/mp4" />
  Your browser does not support the video tag.
</video>

      } @else {
      <img [src]="product.image" >}

      <div><h2>{{product.title}}</h2>

      <div [innerHTML]="product.description"></div>
      <strong>{{product.price}} Br</strong>
      <br><br>
      <button mat-raised-button color="primary" (click)="addToCart()">В корзину</button>
      </div>
</div>
}
  `
})
export class ProductDetailsComponent implements OnInit{
  product:any
document:any
  constructor(
    private route: ActivatedRoute,
    private products: ProductsService,
    private cart: CartService
  ) {}

  addToCart() {
    this.cart.add(this.product!);
  }
  ngOnInit() {
  this.product = this.products.getById(
    Number(this.route.snapshot.paramMap.get('id'))
  );
 // let t = this.product.description
 // this.product.description = this.stringToHTML(t)
}
 stringToHTML(htmlString:string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    // Return the body's child nodes, or the body itself
    return (doc.body.innerHTML);
}
stringToNode(htmlString:string) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    // Return the first child (if you need the wrapper div, return tempDiv)
    return tempDiv.firstChild;
}
}

