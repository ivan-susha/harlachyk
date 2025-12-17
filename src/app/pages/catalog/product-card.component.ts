import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import Atropos from 'atropos';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  template: `

  <mat-card>
    <div class="image-content">
      <div #atroposContainer class="atropos">
      <div class="atropos-scale">
        <div class="atropos-rotate">
          <div class="atropos-inner"  data-atropos-offset="-5">
   <img mat-card-image [src]="product.image"  alt="image">

          </div></div></div></div>
    </div>
    <mat-card-title>{{product.title}}</mat-card-title>
    <mat-card-content>{{product.price}} Br</mat-card-content>
    <button mat-button color="primary" [routerLink]="['/product', product.id]">
      Подробнее
    </button>
  </mat-card>
  `
})
export class ProductCardComponent implements AfterViewInit, OnDestroy{
  @Input() product!: Product;
@ViewChild('atroposContainer') atroposContainer!: ElementRef;
  private myAtropos: any;
ngAfterViewInit(): void {
    this.myAtropos = Atropos({
      el: this.atroposContainer.nativeElement,
      activeOffset: 50,
      shadowScale: 1.05,
      rotateYMax:35,
      shadow: true,
      onEnter() {
      //  console.log('Enter');
      },
      onLeave() {
      //  console.log('Leave');
      }
    });
  }
ngOnDestroy(): void {
    if (this.myAtropos) {
      this.myAtropos.destroy();
    }
  }
}


