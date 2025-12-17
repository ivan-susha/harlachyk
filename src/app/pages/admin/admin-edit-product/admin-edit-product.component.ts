import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  template: `
    <h2>{{isNew ? 'Добавить товар' : 'Редактировать товар'}}</h2>

    <form (ngSubmit)="save()">
      <input [(ngModel)]="product.title" name="title" placeholder="Название">
      <input [(ngModel)]="product.price" name="price" placeholder="Цена">
      <input [(ngModel)]="product.image" name="image" placeholder="Изображение">
      <textarea [(ngModel)]="product.description" name="desc" placeholder="Описание" style="height:200px"></textarea>

      <button mat-raised-button color="primary">Сохранить</button>
    </form>
  `
})
export class AdminEditProductComponent implements OnInit {
 // id = Number(this.route.snapshot.paramMap.get('id'));
  //isNew = isNaN(this.id);

 // product = this.isNew
 //   ? { id: Date.now(), title: '', price: 0, description: '', image: '' }
 //   : { ...this.products.getById(this.id)! };
  id:any
  isNew:any
  product:any

  constructor(
    private route: ActivatedRoute,
    private products: ProductsService,
    private router: Router
  ) {}

  save() {
    if (this.isNew) this.products.add(this.product);
    else this.products.update(this.product);

    this.router.navigate(['/admin']);
  }
  ngOnInit(): void {
     this.id = Number(this.route.snapshot.paramMap.get('id'));
  this.isNew = isNaN(this.id);

  this.product = this.isNew
    ? { id: Date.now(), title: '', price: 0, description: '', image: '' }
    : { ...this.products.getById(this.id)! };
  }
}
