import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminEditProductComponent } from './pages/admin/admin-edit-product/admin-edit-product.component';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },

  {
    path: 'admin',
    canActivate: [adminGuard],
    children: [
      { path: '', component: AdminProductsComponent },
      { path: 'add', component: AdminEditProductComponent },
      { path: 'edit/:id', component: AdminEditProductComponent }
    ]
  }
];
