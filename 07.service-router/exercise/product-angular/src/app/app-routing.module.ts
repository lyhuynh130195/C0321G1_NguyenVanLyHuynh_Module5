import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";


const routes: Routes = [{
  path: "",
  component: ProductListComponent
},
  {
    path: 'product/list',
    component: ProductListComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  }, {
    path: 'product/edit/:id',
    component: ProductEditComponent
  }, {
    path: 'product/detail/:id',
    component: ProductDetailComponent
  }, {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
