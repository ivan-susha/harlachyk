import { Component, Injectable, OnInit,  CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { ProductCardComponent } from './product-card.component';
import { Product } from '../../core/models/product.model';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import AtroposComponent from 'atropos/element';
//import 'atropos/css'; // Import CSS if not already in global styles

// Register the custom element once
import Atropos from 'atropos';
//import 'atropos/css';

@Component({
  standalone: true,
  imports: [ProductCardComponent],
  template: `
  <div  class="grid" class="flex-container">


      @for(p of products;track p.id){
       <app-product-card [product]="p" style="transform: scale(0.8);">
    </app-product-card>  }




  </div>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: [`.grid { display:flex; flex-wrap:wrap; gap:20px; }`]
})
@Injectable()
export class CatalogComponent implements OnInit{
 // @ViewChild('atroposContainer') atroposContainer!: ElementRef;
  private myAtropos: any;
 products
  constructor(private productsService: ProductsService) {this.products = this.productsService.getAll();}
// products = this.productsService.getAll();

   ngOnInit() {
// this.products = this.productsService.getAll();
  }
/*
 ngAfterViewInit(): void {
    this.myAtropos = Atropos({
      el: this.atroposContainer.nativeElement,
      activeOffset: 50,
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
    */
}

