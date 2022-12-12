import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'list', component: ProductsComponent,
  },
  {
    path: 'detail/:id', component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
