import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { Carousel } from "../../component/carousel/carousel";

interface DataItem {
  img: string;
}
@Component({
  standalone: true,
  imports: [MatButtonModule,   Carousel],
  template: `

    @if(product){
       @if(product.carousel){
        <app-carousel [slides]="slides"></app-carousel>
       }

    <div class="flex-container">
      @if(product.carousel){

    } @else if(product.video){
      <!--
          <video  autoplay muted playsinline webkit-playinginline loop controls  height="550";width="400";>
  <source  src="assets/video/cross-v.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
    -->
<video width="320" height="240" autoplay muted controls>
  <source src="https://ivan-susha.github.io/harlachyk/assets/video/piala_video.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>

      } @else {
      <img [src]="product.image" >
    }

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
  product:any;
  img_array: any;
  slides:DataItem[]=[];
slideConfig:any
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
 this.img_array = this.product.carousel.split(",")
 this.slides = [];
 if(this.img_array.length>0){
  for(let i=0;i<this.img_array.length;i++){
    const el = { "img": this.img_array[i] };
     this.slides.push(el);
    // this.img_array[i] ="{"+ "img:"+this.img_array[i] + "/400x400" + "}"
  }
 // this.slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "dots": true, "infinite": true};
 }
}

}

